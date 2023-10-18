import React, { useState } from 'react'
import usePokemon from '../hooks/usePokemon';

const Pokemones = () => {
  const [actual, setActual] = useState('https://pokeapi.co/api/v2/ability/?limit=10&offset=0');
  const { pokemones, loading, anterior, siguiente } = usePokemon(actual);
  return (
    loading ? 
    <p>Cargando...</p>
    :
    <div>
      <ul>
      {
        pokemones.map((pokemones, index) => {
          return <li key={index}>{ pokemones['name'] }</li>
        })
      }
      </ul>
      <button onClick={() => anterior !== null && setActual(anterior)}>Anterior</button>
      <button onClick={() => siguiente !== null && setActual(siguiente)}>Siguiente</button>
    </div>
  )
}

export default Pokemones