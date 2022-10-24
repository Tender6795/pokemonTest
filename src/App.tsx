import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS, GET_POKEMONS_BY_NAME } from './queries'
import PokemonCard from './componens/PokemonCard'
import {  TextField } from '@mui/material'
import Loader from './componens/Loader'

function App() {
  const [name, setName] = useState('Mas')
  const { data, loading, error } = useQuery(GET_POKEMONS_BY_NAME, {
    variables: {
      name,
    },
  })

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    if (data && !loading && !error) {
      setPokemons(data?.pokemon_v2_item)
    }
  }, [data])

  return (
    <div>

      <TextField
        id="outlined-basic"
        label="pokemon name"
        variant="outlined"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {loading && <Loader />}
      {!loading && !pokemons.length && <h1>Not Found</h1>}
      {!loading && pokemons.map(pokemon => <PokemonCard pokemon={pokemon} />)}
    </div>
  )
}

export default App
