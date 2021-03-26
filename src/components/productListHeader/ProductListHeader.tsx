import React from 'react';

import {
  StyledProductListHeader,
  StyledHeadline
} from './styles'

interface ProductListHeaderProps {
  readonly resultsCount: number
  readonly favCount: number
}

const ProductListHeader: React.FC<ProductListHeaderProps> = ({resultsCount, favCount}) => { 

  return (
    <StyledProductListHeader>           
      <StyledHeadline variant="overline">
        {`Nike Air Force 1 (${resultsCount && resultsCount})`}
      </StyledHeadline>            
    </StyledProductListHeader>
  );
}

export default ProductListHeader;
