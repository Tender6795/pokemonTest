import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS_BY_NAME } from './queries'
import {  TextField } from '@mui/material'
import Loader from './componens/Loader'
import PokemonCardContainer from './componens/PokemonCardContainer'

function App() {
  const [name, setName] = useState('Charmander')
  const { data, loading, error } = useQuery(GET_POKEMONS_BY_NAME, {
    variables: {
      name,
    },
  })

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    if (data && !loading && !error) {
      setPokemons(data?.pokemon_v2_pokemon)
    }
    // eslint-disable-next-line
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
      {!loading && <PokemonCardContainer pokemons={pokemons}/>}
    </div>
  )
}

export default App
