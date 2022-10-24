import { gql } from '@apollo/client'

export const GET_ALL_POKEMONS = gql`
  query {
      pokemon_v2_item {
        name
        cost
      }
  }
`
