import { Card, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function PokemonCard({ pokemon }) {
  const { name, height, base_experience, weight, pokemon_v2_pokemonspecy, pokemon_v2_pokemontypes  } = pokemon
  const  specyName= pokemon_v2_pokemonspecy.name
  const types = pokemon_v2_pokemontypes.map(t=>t.pokemon_v2_type.name).join(', ')
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5">{name.toUpperCase()}</Typography>
        <Typography variant="h6">height: {height}</Typography>
        <Typography variant="h6">experience: {base_experience}</Typography>
        <Typography variant="h6">weight: {weight}</Typography>
        <Typography variant="h6">specy: {specyName}</Typography>
        <Typography variant="h6">types: {types}</Typography>
      </CardContent>
    </StyledCard>
  )
}

const StyledCard = styled(Card)(() => ({
  background: '#eeeeee',
  width: '30%',
  marginTop: '20px',
}))
