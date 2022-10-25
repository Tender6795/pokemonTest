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
  query getPokemonsByName(
    $name: String
    $specy: String
    $typeOfPokemon: String
  ) {
    pokemon_v2_pokemon(
      where: {
        name: { _iregex: $name }
        pokemon_v2_pokemonspecy: { name: { _iregex: $specy } }
        pokemon_v2_pokemontypes: {_or: {pokemon_v2_type: {name: {_iregex: $typeOfPokemon}}}}
      }
    ) {
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
export const GET_POKEMONS_TYPES = gql`
  query {
    pokemon_v2_type {
      name
    }
  }
`
export const GET_POKEMONS_SPECIES = gql`
  query {
    pokemon_v2_pokemonspecies {
      name
    }
  }
`
