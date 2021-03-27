import styled, { css } from 'styled-components';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core'

export const StyledAppBar = styled(AppBar)`
  ${({theme}) => css`
    
  `}
`;

export const StyledToolbar = styled(Toolbar)`
  ${({theme}) => css`
    padding: ${theme.spacing(0, 0)};
    .col {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`;

export const StyledLogo = styled(Typography)`
  ${({theme}) => css`
    cursor: pointer;
  `}
`;

export const StyledIconButton = styled(IconButton)`
  ${({theme}) => css`
    
  `}
`;
