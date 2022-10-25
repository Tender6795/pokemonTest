export interface IPokemon {
  id: number
  name: string
  height: number
  base_experience: number
  weight: number
  pokemon_v2_pokemonspecy: IPokemonspecy
  pokemon_v2_pokemontypes: IPokemontype[]
}

export interface IPokemontype {
  pokemon_v2_type: {
    name: string
  }
}

export interface IPokemonspecy {
  name: string
}
