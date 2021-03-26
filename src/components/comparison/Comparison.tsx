import React, { useEffect } from 'react';
import MyContext from '../Context'
import * as api from '../../api/Api'

import {
  Typography,
  IconButton
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
  readonly comparisonOpen: boolean
}

const ComparisonOverlay: React.FC<ComparisonProps> = ({favs, comparisonOpen}) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const [productData, setProductData] = React.useState([{}])

  useEffect(() => {
    if ( comparisonOpen ) {
      setIsLoading(true)
      let loadCounter = 0
      let tempArray = [{}]
      tempArray.splice(0, 1)
      favs.map((favID) =>  {
        if (favID) {
          api.getProductById(favID).then( (data: any) => {
            if (data.error) {
              console.log("Error:", data.error)
            } else {
              tempArray.push(data.response.data.results[0])              
            }
            loadCounter++
            if (loadCounter === favs.length-1) {
              setIsLoading(false)
              setProductData(tempArray)
            }
          })
        }
      })
    }
  }, [comparisonOpen])

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

            <StyledDialogContent dividers>
              {context.favs.length-1 ?
                isLoading ?
                  <>Loading...</> :
                  <div className="grid">
                    <div className="inner">
                      {productData.map( (data: any) => {
                        return (
                          <div 
                          className="s-12 ipad-6 xl-4 col"
                          key={data.id}
                          >
                          <Card 
                          title={data.title}
                          image={data.media.thumbUrl}
                          price={data.retailPrice}
                          productID={data.id}
                          />
                          </div>
                        )
                      })}
                    </div>
                  </div> 
                : 
                <>No 👟 saved to compare 😯</>
              }
            </StyledDialogContent>       
          </StyledDialog>

        )
      }}
    </MyContext.Consumer>
  );
}

export default ComparisonOverlay;
