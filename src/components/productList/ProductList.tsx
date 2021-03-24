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
            <div className="s-12 ipad-6 l-4 col">
              <Card 
                title={data.title}
                image={data.media.imageUrl}
                />
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default ProductList;
