import styled, { css } from 'styled-components';

import {
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core'

export const StyledDialog = styled(Dialog)`
  ${({ theme }) => css`
    .MuiDialog-paper {
      max-width: 80vw;
      width: 80vw;
      min-height: 50vh;
    }
  `}
`;

export const StyledDialogTitle = styled(DialogTitle)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing(1, 1, 1, 3)};
  `}
`;

export const StyledDialogContent = styled(DialogContent)`
  ${({ theme }) => css`
    padding: ${theme.spacing(0)};
    &.empty {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .grid {
      padding: ${theme.spacing(2, 2)}
    }
  `}
`;