import React, { useEffect } from 'react'

export default function PokemonCard({ pokemon }) {
  // useEffect(()=>{
  //   console.log('pokemon===', pokemon)
  // }, [pokemon])
  return <div>PokemonCard: {pokemon.name}</div>
}
