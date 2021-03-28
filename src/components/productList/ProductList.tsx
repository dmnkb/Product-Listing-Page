import React from 'react';
import { StoreContext } from '../../state/Context'

import {
  Box,
  Typography
} from '@material-ui/core'

import Card from './card/Card'

import { StyledProductList } from './styles'

interface ProductListProps {
  readonly productData: any
}

const ProductList: React.FC<ProductListProps> = ({productData}) => {

  return (
    <StoreContext.Consumer>
      {( context ) => {
        return (
          <>
            <Box pb={2}>
              <Typography variant="overline">
                {`Nike Air Force 1 (${context.state.productData?.count})`}
              </Typography>
            </Box>
            <StyledProductList className="grid">
              <div className="inner">
                {productData.map( (data: any) => {
                  return (
                    <div 
                      key={data.id}
                      className="s-12 ipad-6 xl-4 col"
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
            </StyledProductList>
          </>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default ProductList;
