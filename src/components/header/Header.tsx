import React from 'react';
import StoreContext from '../Context'

import {
  Badge  
} from '@material-ui/core'

import HeartIconBorder from '@material-ui/icons/FavoriteBorder';

import {
  StyledAppBar,
  StyledToolbar,
  StyledLogo,
  StyledIconButton
} from './styles'

interface HeaderPros {
  readonly title: string
}

const Header: React.FC<HeaderPros> = ({title}) => { 

  return (
    <StoreContext.Consumer>
      {( context ) => {
        return (
          <StyledAppBar position="sticky" color="secondary" elevation={0}>
            <StyledToolbar>

              <div className="grid">
                <div className="inner">
                  <div className="s-12 col">
                    
                    <StyledLogo variant="h6" >{title}</StyledLogo>

                    {context.favs.length && context.favs[0] !== "" ?
                      <StyledIconButton 
                        aria-label="favorite"
                        color="primary"
                        className="fav-button"
                        onClick={ () => context.handleComparisonOpen() }
                        >
                        <Badge badgeContent={context.favs.length} color="primary">
                          <HeartIconBorder /> 
                        </Badge> 
                      </StyledIconButton> :
                      <StyledIconButton 
                        aria-label="favorite"
                        color="primary"
                        className="fav-button"
                        onClick={ () => context.handleComparisonOpen() }
                        >
                        <HeartIconBorder /> 
                      </StyledIconButton>
                    }
                    
                  </div>
                </div>
              </div>

            </StyledToolbar>
          </StyledAppBar>
          )
        }}
      </StoreContext.Consumer>
  );
}

export default Header;
