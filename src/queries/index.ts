import { gql } from '@apollo/client'

export const GET_ALL_POKEMONS = gql`
  query {
    pokemon_v2_item {
      name
      cost
    }
  }
`

export const GET_POKEMONS_BY_NAME = gql`
  query getPokemonsByName($name: String){
    pokemon_v2_itemname(where: {name: {_iregex: $name}}) {
      name
    }
  }
`
