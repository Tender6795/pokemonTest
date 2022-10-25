import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { GET_POKEMONS_TYPES } from '../queries'

export const PokemonTypes = ({ changeTypeOfPokemon }) => {
  const { data, loading, error } = useQuery(GET_POKEMONS_TYPES)
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [selectedType, setSelectedType] = useState('')

  useEffect(() => {
    if (data && !loading && !error) {
      setPokemonTypes(data.pokemon_v2_type)
    }
  }, [data])

  const hanldeChange =(e)=>{
    const newValue = e.target.value
    setSelectedType(newValue)
    changeTypeOfPokemon(newValue==='All'? '': newValue )
}

  return (
    <FormControl sx={{ minWidth: 320 }}>
      <InputLabel>Type of Pokemon</InputLabel>
      <Select
        value={selectedType}
        label="Type of Pokemon"
        onChange={hanldeChange}
      >
        <MenuItem value={'All'}>All</MenuItem>
        {pokemonTypes.map((type, i) => (
          <MenuItem value={type.name} key={i}>
            {type.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
