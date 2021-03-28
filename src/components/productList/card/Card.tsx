import React from 'react';
import { StoreContext } from '../../../state/Context'

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
  readonly productID: string
  readonly title: string
  readonly image: string
  readonly price: string
}

const Card: React.FC<CardProps> = ({title, image, price, productID}) => {
  
  // FIXME 
  /** 
   * Given, the API doesn't support any sort of variants and that this
   * is a test situation, the functions below generate "fake" variants. 
   * As of now those are generated on the fly per item causing them to update
   * every time the card updates.
   * However, the focus was to demonstrate :hover behavior.
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

  let colors: number[] = []
  for (let i = 0; i < Math.floor(Math.random() * 4) + 1 ; i++) {
    colors.push(allColors[i])
  }
  colors.sort()

  return (
    <StoreContext.Consumer>
      {( context ) => {
        let isFavourite = context.state.favs ? (context.state.favs?.findIndex(x => x===productID) !== -1) : false
        
        return ( 
          <StyledCard>
            <StyledFavoriteButton
              aria-label="favorite"
              color="primary"
              className={`fav-button ${isFavourite && "faved"}`}
              onClick={() => {                
                context.dispatch({ type: 'FAV_CLICKED', payload: productID })
              }}>
              {isFavourite ?
                <HeartIcon /> :
                <HeartIconBorder />}
            </StyledFavoriteButton>
            <StyledCardActionArea>
              {/* If image is missing let's fake it for the sake of demonstration */}
              <StyledCardMedia
                image={image || "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606164536"}
                title={title}
              />
              <StyledContent>
                <StyledTitle gutterBottom variant="h3" data-testid={"card-title"}>
                  {title}
                </StyledTitle>
                <StyledPrice variant="subtitle1" color="textSecondary" data-testid={"card-price"}>
                  {price || 100},00€
                </StyledPrice>
              </StyledContent>
            </StyledCardActionArea>
            <ul className="colors">
              {colors.map((i) => 
                <li 
                  key={i}
                  className={`variant-${i}`}
                  ></li>
              )}
            </ul>
          </StyledCard>      
        )
      }}
    </StoreContext.Consumer>
  );
}

export default Card;
