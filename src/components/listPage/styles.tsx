import styled, { css } from 'styled-components';

import {
  CircularProgress
} from '@material-ui/core'

import ProductList from '../productList/ProductList'

export const StyledProductList = styled(ProductList)`

`;

export const StyledCircularProgress = styled(CircularProgress)`
  margin-left: calc( 50% - 24px );
  margin-top: calc( 50vh - 48px );
`;

export const StyledFilterList = styled.div`
  ${({ theme }) => css`
    & > * { 
      width: 100%;
      &:not(:last-child) {
        margin-bottom: ${theme.spacing(2)}px;
      }
    }
  `}
`;