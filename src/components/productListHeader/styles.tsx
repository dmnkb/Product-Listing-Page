import styled, { css } from 'styled-components';

import {
  Typography,
  Badge
} from '@material-ui/core'

export const StyledProductListHeader = styled.header`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${theme.spacing(0, 0, 2, 0)};
  `}
`;

export const StyledHeadline = styled(Typography)`
  
`;

export const StyledControls = styled.div`
  ${({theme}) => css`
  display: flex;
  align-items: center;
  .MuiFormControl-root {
    width: 150px;
  }
  button { margin: ${theme.spacing(0, 0, 0, 2)}; }
  `}
`;

export const StyledBadge = styled(Badge)`
  ${({theme}) => css`
    .MuiBadge-badge { 
      border-radius: 8px; 
      color: ${theme.palette.common.black};
    }
  `}
`;
