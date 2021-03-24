import styled, { css } from 'styled-components';

export const StyledProductList = styled.div`
  ${({ theme }) => css`
    .inner {
      margin: ${theme.spacing(0, -.5)};
    }
  `}
`;