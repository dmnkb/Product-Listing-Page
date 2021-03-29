import React from 'react';
import { StoreContext } from '../../state/Context'

import {
  Badge,
  Tooltip
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
  readonly handleLogoClicked: Function
}

const Header: React.FC<HeaderPros> = ({title, handleLogoClicked}) => { 

  return (
    <StoreContext.Consumer>
      {( context ) => {
        return (
          <StyledAppBar position="sticky" color="secondary" elevation={0}>
            <StyledToolbar>

              <div className="grid">
                <div className="inner">
                  <div className="s-12 col">
                    
                    <StyledLogo 
                      variant="h6"
                      onClick={() => handleLogoClicked()}
                      >{title}</StyledLogo>

                    {context.state.favCount ?
                      <Tooltip title={`Compare ${context.state.favCount} items`}>
                        <StyledIconButton 
                          aria-label="favorite"
                          color="primary"
                          className="fav-button"
                          onClick={ () => context.dispatch({ type: 'SET_COMPARISON_OPEN', payload: true }) }
                          >
                          <Badge badgeContent={context.state.favCount} color="primary">
                            <HeartIconBorder /> 
                          </Badge> 
                        </StyledIconButton> 
                      </Tooltip> :
                      <Tooltip title={`Compare ${context.state.favCount} items`}>
                        <StyledIconButton 
                          aria-label="favorite"
                          color="primary"
                          className="fav-button"
                          onClick={ () => context.dispatch({ type: 'SET_COMPARISON_OPEN', payload: true }) }
                          >
                          <HeartIconBorder /> 
                        </StyledIconButton>
                      </Tooltip>
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
