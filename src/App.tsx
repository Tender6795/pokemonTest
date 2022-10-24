import  { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS } from './queries'

function App() {
  const { data, loading, error } = useQuery(GET_ALL_POKEMONS)
  useEffect(()=>{
    console.log('===========',data)
  }, [data])

  const handeleClick = async ()=>{
    // https://pokeapi.co/api/v2/pokemon/ditto
    const respJson = await  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const resp = await respJson.json()
    console.log('resp====', resp)
  }

  return (
    <div>
      <button onClick={handeleClick}>Test api</button>
    </div>
  )
}

export default App
