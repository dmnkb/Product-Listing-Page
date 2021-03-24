import React from 'react';

import Card from './card/Card'

interface ProductListProps {
  readonly productData: any
}

const ProductList: React.FC<ProductListProps> = ({productData}) => {

  return (
    <div className="grid">
      <div className="inner">
        {productData.map( (data: any) => {
          return (
            <div className="s-12 l-6 xl-4 col">
              <Card 
                title={data.title}
                image={data.media.imageUrl}
                price={data.retailPrice}
                />
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default ProductList;
