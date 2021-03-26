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
  );
}

export default ProductList;
