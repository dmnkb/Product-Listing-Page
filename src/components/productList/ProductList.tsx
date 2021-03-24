import React from 'react';

interface ProductListProps {
  readonly productData: any
}

const ProductList: React.FC<ProductListProps> = ({productData}) => {

  return (
    <div className="grid">
      <div className="inner">
        {productData.map( (data: any) => {
          return (
            <div 
              className="s-6 m-4 l-3 col" 
              key={data.id}>
              <img 
                src={`${data.media.imageUrl}`} 
                width="100%"
                alt=""
                />
              <span>{data.title}</span><br/><br/>
              <span>{data.colorway}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ProductList;
