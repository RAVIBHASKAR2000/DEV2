import { gql } from '@apollo/client';
import { USER_IMAGE } from './fragments';

export const GET_CAROUSEL = gql`
  query {
    allCarousels{
      image{ publicUrl }
      id
      alt
    }
  }
  
`;
