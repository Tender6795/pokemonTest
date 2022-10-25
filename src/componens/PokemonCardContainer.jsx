import { styled } from '@mui/material/styles'
import PokemonCard from './PokemonCard'

export default function PokemonCardContainer({ pokemons }) {
  return (
    <StyledDiv>
      {pokemons.map((pokemon, i) => (
        <PokemonCard pokemon={pokemon} key={i} />
      ))}
    </StyledDiv>
  )
}

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}))
