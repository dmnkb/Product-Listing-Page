import React from 'react';

import {  
  Typography
} from '@material-ui/core'

import {
  StyledCard,
  StyledCardActionArea,
  StyledCardMedia,
  StyledCardMediaMissing,
  StyledContent,
  StyledTitle,
  StyledPrice
} from './styles'

interface CardProps {
  readonly title: string
  readonly image: string
  readonly price: string
}

const Card: React.FC<CardProps> = ({title, image, price}) => {

  return (
    <StyledCard>
      <StyledCardActionArea>
        {image ? 
          <StyledCardMedia
            image={image}
            title={title}
          /> : 
          <StyledCardMediaMissing>
            <span>No image found</span>
          </StyledCardMediaMissing>
        }
        <StyledContent>
          <StyledTitle gutterBottom variant="h2">
            {title}
          </StyledTitle>
          <StyledPrice variant="subtitle1" color="textSecondary">
            {price}
          </StyledPrice>
        </StyledContent>
      </StyledCardActionArea>
    </StyledCard>
  );
}

export default Card;
