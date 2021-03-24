import styled, { css } from 'styled-components';

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