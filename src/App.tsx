import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'
import { GET_POKEMONS_BY_PARAMS } from './queries'
import Loader from './componens/Loader'
import PokemonCardContainer from './componens/PokemonCardContainer'
import { PokemonTypes } from './componens/PokemonTypes'
import { PokemonSpecies } from './componens/PokemonSpecies'

function App() {
  const [name, setName] = useState('Char')
  const [pokemons, setPokemons] = useState([])
  const [varieblesToSearch , setVarieblesToSearch] = useState({
    name,
    specy:'',
    typeOfPokemon:''
  })
  const { data, loading, error } = useQuery(GET_POKEMONS_BY_PARAMS, {
    variables: {...varieblesToSearch, name},
  })
  
  useEffect(() => {
    if (data && !loading && !error) {
      setPokemons(data?.pokemon_v2_pokemon)
    }
    // eslint-disable-next-line
  }, [data])

  const changeTypeOfPokemon = (typeOfPokemon:string) =>{
    setVarieblesToSearch({...varieblesToSearch, typeOfPokemon})
  }

  const changeSpecyOfPokemon = (specy:string) =>{
    setVarieblesToSearch({...varieblesToSearch, specy})
  }

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
        <PokemonTypes changeTypeOfPokemon={changeTypeOfPokemon}/>
        <PokemonSpecies changeSpecyOfPokemon={changeSpecyOfPokemon} />
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
