import React, { useEffect } from 'react';
import MyContext from '../Context'
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

interface ComparisonProps {
  readonly favs: string[]
  readonly favCount: number
  readonly comparisonOpen: boolean
}

const ComparisonOverlay: React.FC<ComparisonProps> = ({favs, comparisonOpen, favCount}) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const [productData, setProductData] = React.useState([{}])
  //const [favCount, setFavCount] = React.useState(0);

  useEffect(() => {
    if ( comparisonOpen ) {
      setIsLoading(true)
      let loadCounter = 0
      let tempArray = [{}]
      tempArray.splice(0, 1)
      favs.forEach((favID) =>  {
        if (favID) {
          api.getProductById(favID).then( (data: any) => {
            if (data.error) {
              console.log("Error:", data.error)
            } else {
              tempArray.push(data.response.data.results[0])
            }
            loadCounter++
            if (loadCounter === favs.length) {
              setIsLoading(false)
              setProductData(tempArray)
            }
          })
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comparisonOpen, favCount])

  return (
    <MyContext.Consumer>
      {( context ) => {      
        return (

          <StyledDialog 
            open={context.comparisonOpen}
            onClose={context.handleComparisonClose}
            aria-labelledby="alert-dialog-title"
            >
            <StyledDialogTitle disableTypography id="alert-dialog-title">
              <Typography variant="subtitle1">Compare products</Typography>
              <IconButton 
                aria-label="close"
                color="primary"
                onClick={ () => context.handleComparisonClose() }
                >
                <CloseIcon /> 
              </IconButton>
            </StyledDialogTitle>

            <StyledDialogContent dividers className={`${(context.favs.length < 1 || isLoading) && "empty"}`}>
              {context.favs.length && comparisonOpen ?
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
    </MyContext.Consumer>
  );
}

export default ComparisonOverlay;
