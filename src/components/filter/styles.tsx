import styled, { css } from 'styled-components';

export const StyledFilterList = styled.div`
  ${({ theme }) => css`
    .inner {
      // Space here is too limited for standard 24px gutter
      grid-gap: 0;
      margin: ${theme.spacing(-1, -1)};
    }
    .col {
      padding: ${theme.spacing(1, 1)};
      & > * {
        width: 100%;
      }
    }
  `}
`;