import styled, { css } from 'styled-components';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'

export const StyledCard = styled(Card)`

`;

export const StyledCardActionArea = styled(CardActionArea)`
  height: 400px;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 150px;
  background-size: contain !important;
`;

export const StyledCardMediaMissing = styled(CardMedia)`
  height: 150px;
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

export const StyledContent = styled(CardContent)`

`;

export const StyledCardActions = styled(CardActions)`

`;

export const StyledCardButton = styled(Button)`

`;