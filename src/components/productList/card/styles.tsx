import styled, { css } from 'styled-components';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography  
} from '@material-ui/core'

export const StyledCard = styled(Card)`

`;

export const StyledCardActionArea = styled(CardActionArea)`
  
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
  h2 {
    
  }
`;

export const StyledTitle = styled(Typography)`
  
`;

export const StyledPrice = styled(Typography)`
  
`;

