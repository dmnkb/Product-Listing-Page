import React from 'react';

import HeartIconBorder from '@material-ui/icons/FavoriteBorder';
import HeartIcon from '@material-ui/icons/Favorite';

import {
  StyledCard,
  StyledCardActionArea,
  StyledCardMedia,
  StyledContent,
  StyledTitle,
  StyledPrice,
  StyledFavoriteButton
} from './styles'

interface CardProps {
  readonly title: string
  readonly image: string
  readonly price: string
}

const Card: React.FC<CardProps> = ({title, image, price}) => {
  
  /**
   * Simulate color varants. Steps:
   * 
   * 1) Create an array with values from 1 to 4.
   * 2) Shuffle that array using Fisher–Yates algorithm.
   * 3) Fill another array with a random amount of numbers of the previous array.
   * 4) Sort new array in order to make the colors look more harmonically.
   */

  function shuffle(a: number[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let allColors = [1, 2, 3, 4]
  allColors = shuffle(allColors)

  let colors = []
  for (let i = 0; i < Math.floor(Math.random() * 4) + 1 ; i++) {
    colors.push(allColors[i])
  }
  colors.sort()

  return (
    <StyledCard>
      <StyledFavoriteButton 
        aria-label="favorite"
        color="primary"
        className="fav-button"
        >
        <HeartIconBorder />
      </StyledFavoriteButton>
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
        </StyledContent>
      </StyledCardActionArea>
      <ul className="colors">
        {colors.map((i) => 
          <li 
            className={`variant-${i}`}
            key={i}
            ></li>
        )}
      </ul>
    </StyledCard>
  );
}

export default Card;
