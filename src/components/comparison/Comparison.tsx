import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../state/Context'
import * as api from '../../api/Api'

import {
  Typography,
  IconButton,
  CircularProgress
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

import Card from '../productList/card/Card'

import { 
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent
} from './styles'


const ComparisonOverlay: React.FC = () => {

  const { state } = useContext(StoreContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [productData, setProductData] = React.useState([{}])


  useEffect(() => {
    if ( state.comparisonOpen && state.favs ) {
      setIsLoading(true)
      let loadCounter = 0
      let tempArray = [{}]
      tempArray.splice(0, 1)
      state.favs && state.favs.forEach((favID) =>  {
        if (favID) {
          api.getProductById(favID).then( (data: any) => {
            if (data.error) {
              console.log("Error:", data.error)
            } else {
              tempArray.push(data.response.data.results[0])
            }
            loadCounter++
            if (loadCounter === state?.favs?.length) {
              setIsLoading(false)
              setProductData(tempArray)
            }
          })
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.comparisonOpen, state.favCount])

  return (
    <StoreContext.Consumer>
      {( context ) => {      
        return (

          <StyledDialog 
            open={context.state.comparisonOpen}
            onClose={() => context.dispatch({ type: 'SET_COMPARISON_OPEN', payload: false })}
            aria-labelledby="alert-dialog-title"
            >
            <StyledDialogTitle disableTypography id="alert-dialog-title">
              <Typography variant="subtitle1">Compare products</Typography>
              <IconButton 
                aria-label="close"
                color="primary"
                onClick={ () => context.dispatch({ type: 'SET_COMPARISON_OPEN', payload: false }) }
                >
                <CloseIcon /> 
              </IconButton>
            </StyledDialogTitle>

            <StyledDialogContent dividers className={`${(!context.state.favs || isLoading) && "empty"}`}>
              {context.state.favs && context.state.favs.length && state.comparisonOpen ?
                isLoading ?
                  <CircularProgress /> :
                  <div className="grid">
                    <div className="inner">
                      {productData?.map( (data: any) =>
                        <div 
                          key={`compare-${data.id}`} 
                          className={`s-12 ipad-6 xl-4 col ${data.id}`}
                          >
                          <Card 
                            title={data?.title}
                            image={data?.media?.thumbUrl}
                            price={data?.retailPrice}
                            productID={data?.id}
                            />
                        </div>
                      )}
                    </div>
                  </div> 
                :                
                <Typography variant="h6">No 👟 saved to compare 😯</Typography>
              }
            </StyledDialogContent>       
          </StyledDialog>

        )
      }}
    </StoreContext.Consumer>
  );
}

export default ComparisonOverlay;
