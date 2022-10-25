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
    pokemon_v2_pokemon(where: {name: {_iregex: $name}}) {
      base_experience
      height
      id
      name
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        name
      }
    }
  }
`
