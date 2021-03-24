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
  StyledCardActions,
  StyledCardButton
} from './styles'

interface CardProps {
  readonly title: string
  readonly image: string
  readonly price?: string
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
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </StyledContent>
      </StyledCardActionArea>
      <StyledCardActions>
        <StyledCardButton size="small" color="primary">
          Share
        </StyledCardButton>
        <StyledCardButton size="small" color="primary">
          Learn More
        </StyledCardButton>
      </StyledCardActions>
    </StyledCard>
  );
}

export default Card;
