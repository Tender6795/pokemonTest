import { styled } from '@mui/material/styles'
import PokemonCard from './PokemonCard'
import {IPokemon} from '../interfaces/pokemon'


interface PokemonCardContainerProps{
  pokemons: IPokemon[]
}

const PokemonCardContainer  =({ pokemons }: PokemonCardContainerProps) => {
  return (
    <StyledDiv>
      {pokemons.map((pokemon: IPokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </StyledDiv>
  )
}

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}))

export default PokemonCardContainer