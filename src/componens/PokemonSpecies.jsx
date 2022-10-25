import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { GET_POKEMONS_SPECIES } from '../queries'

export const PokemonSpecies = () => {
  const { data, loading, error } = useQuery(GET_POKEMONS_SPECIES)
  const [pokemonSpecies, setPokemonSpecies] = useState([])
  const [selectedSpecy, setSelectedSpecy] = useState('')

  useEffect(() => {
    if (data && !loading && !error) {
      setPokemonSpecies(data.pokemon_v2_pokemonspecies)
    }
  }, [data])

  return (
    <FormControl sx={{ minWidth: 320 }}>
      <InputLabel>Specy of Pokemon</InputLabel>
      <Select
        value={selectedSpecy}
        label="Specy of Pokemon"
        onChange={e => setSelectedSpecy(e.target.value)}
      >
        {pokemonSpecies.map((type, i) => (
          <MenuItem value={type.name} key={i}>
            {type.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
