import { useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function PokemonCard({ pokemon }) {
  useEffect(()=>{
    console.log('pokemon===', pokemon)
  }, [pokemon])

  const { name, height, base_experience, weight  } = pokemon
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">height: {height}</Typography>
        <Typography variant="h6">experience: {base_experience}</Typography>
        <Typography variant="h6">weight: {weight}</Typography>
      </CardContent>
    </StyledCard>
  )
}

const StyledCard = styled(Card)(() => ({
  background: '#eeeeee',
  width: '47%',
  marginTop: '20px',
}))
