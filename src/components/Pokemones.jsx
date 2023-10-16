import React, { useEffect, useState } from 'react'

const Pokemones = () => {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const obtenerPokemones = async () =>{
      const response = await fetch('https://pokeapi.co/api/v2/ability/?limit=10&offset=10');
      const data = await response.json();

      setPokemones(data.results);

      console.log(pokemones);
    }
    
    obtenerPokemones();
  }, []);

  return (
    pokemones.map((pokemones, index) => {
      return <p>{pokemones.name}</p>
    })
  )
}

export default Pokemones