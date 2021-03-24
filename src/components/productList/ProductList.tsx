import React from 'react';

import Card from './card/Card'

import { StyledProductList } from './styles'

interface ProductListProps {
  readonly productData: any
}

const ProductList: React.FC<ProductListProps> = ({productData}) => {

  return (
    <StyledProductList className="grid">
      <div className="inner">
        {productData.map( (data: any) => {
          console.log(data)
          return (
            <div className="s-12 l-6 xl-4 col">
              <Card 
                title={data.title}
                image={data.media.thumbUrl}
                price={data.retailPrice}
                />
              </div>
          )
        })}
      </div>
    </StyledProductList>
  );
}

export default ProductList;
