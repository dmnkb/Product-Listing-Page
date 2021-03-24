import React from 'react';

import {
  StyledCard,
  StyledCardActionArea,
  StyledCardMedia,
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
        {/* Fake image for the sake of demonstration */}
        <StyledCardMedia
          image={image || "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606164536"}
          title={title}
        />
        <StyledContent>
          <StyledTitle gutterBottom variant="h3">
            {title}
          </StyledTitle>
          <StyledPrice variant="subtitle1" color="textSecondary">
            {price || 100},00€
          </StyledPrice>
          <ul className="colors">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </StyledContent>
      </StyledCardActionArea>
    </StyledCard>
  );
}

export default Card;
