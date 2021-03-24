import styled, { css } from 'styled-components';
import { transparentize } from 'polished'

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography  
} from '@material-ui/core'

export const StyledCard = styled(Card)`
  background: #fff;
  box-shadow: 0px 45px 80px rgba(42, 48, 51, 0.03), 0px 18.7999px 33.4221px rgba(42, 48, 51, 0.0215656), 0px 10.0513px 17.869px rgba(42, 48, 51, 0.0178832), 0px 5.6347px 10.0172px rgba(42, 48, 51, 0.015), 0px 2.99255px 5.32008px rgba(42, 48, 51, 0.0121168), 0px 1.24527px 2.21381px rgba(42, 48, 51, 0.00843437);
  border-radius: 10px;
`;

export const StyledCardActionArea = styled(CardActionArea)`
.MuiCardActionArea-focusHighlight { display: none; }
  &:hover {
    .MuiCardMedia-root {
      transform: scale(1.1);
    }
    ul.colors {
      bottom: 24px;
    }
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 150px;
  background-size: 50% !important;
  transition: transform ease 800ms;
`;

export const StyledContent = styled(CardContent)`
  ${({theme}) => css`
    text-align: center;
    margin: ${theme.spacing(2, 4, 6, 4)};
    padding: 0;

    ul.colors {

      transition: 100ms linear bottom;
      transition-delay: 200ms;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;

      li {
        display: block;
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        border: 1px solid #2411cc;
        margin: 0 8px;
        transition: 100ms ease transform;

        &:hover {
          transform: scale(1.5);
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 6px;
          height: 6px;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          border-radius: 4px;
        }

        &:nth-child(1){
          border-color: ${transparentize(0.33, '#F9D7C0')};
          &::after {
            background: #F9D7C0;
          }
        }

        &:nth-child(2){
          border-color: ${transparentize(0.33, '#E89E9E')};
          &::after {
            background: #E89E9E;
          }
        }

        &:nth-child(3){
          border-color: ${transparentize(0.33, '#A495B9')};
          &::after {
            background: #A495B9;
          }
        }

        &:nth-child(4){
          border-color: ${transparentize(0.33, '#2F288A')};
          &::after {
            background: #2F288A;
          }
        }

      }

    }

  `}
`;

export const StyledTitle = styled(Typography)`
  height: 64px;
`;

export const StyledPrice = styled(Typography)`
  ${({theme}) => css`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: calc(calc(0.01 * 1em) * -1);
    color: ${theme.palette.text.secondary};
  `}
`;

