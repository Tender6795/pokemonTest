import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'
import { GET_POKEMONS_BY_NAME } from './queries'
import Loader from './componens/Loader'
import PokemonCardContainer from './componens/PokemonCardContainer'
import { PokemonTypes } from './componens/PokemonTypes'
import { PokemonSpecies } from './componens/PokemonSpecies'

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
      <StyledHeader>
        <TextField
          id="outlined-basic"
          label="Search by name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <PokemonTypes />
        <PokemonSpecies />
      </StyledHeader>
      {loading && <Loader />}
      {!loading && !pokemons.length && <h1>Not Found</h1>}
      {!loading && <PokemonCardContainer pokemons={pokemons} />}
    </div>
  )
}

const StyledHeader = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

export default App
