import React from 'react';
import MyContext from '../Context'

import {
  IconButton  
} from '@material-ui/core'

import HeartIcon from '@material-ui/icons/Favorite';

import {
  StyledProductListHeader,
  StyledHeadline,
  StyledControls,
  StyledBadge
} from './styles'

interface ProductListHeaderProps {
  readonly resultsCount: number
  readonly favCount: number
}

const ProductListHeader: React.FC<ProductListHeaderProps> = ({resultsCount, favCount}) => { 

  return (
    <MyContext.Consumer>
      {( context ) => {        
        return (

          <StyledProductListHeader>           
            <StyledHeadline variant="overline">
              {`Nike Air Force 1 (${resultsCount && resultsCount})`}
            </StyledHeadline>              
            <StyledControls>
              {context.favs.length-1 ?
                <IconButton 
                  aria-label="favorite"
                  color="primary"
                  className="fav-button"
                  onClick={ () => context.handleComparisonClick() }
                  >
                  <StyledBadge badgeContent={favCount} color="secondary">
                    <HeartIcon /> 
                  </StyledBadge> 
                </IconButton> :
                <IconButton 
                  aria-label="favorite"
                  color="primary"
                  className="fav-button"
                  onClick={ () => context.handleComparisonClick() }
                  >
                  <HeartIcon /> 
                </IconButton>
                }
            </StyledControls>
          </StyledProductListHeader>

        )
      }}
    </MyContext.Consumer>
  );
}

export default ProductListHeader;
