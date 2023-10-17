import React, { useEffect, useState } from 'react'

const Pokemones = () => {

  const [pokemones, setPokemones] = useState([]);
  const [anterior, setAnterior] = useState(null);
  const [siguiente, setSiguiente] = useState(null);
  const [actual, setActual] = useState('https://pokeapi.co/api/v2/ability/?limit=10&offset=0');

  useEffect(() => {
    const obtenerPokemones = async () =>{
      const response = await fetch(actual);
      const data = await response.json();

      console.log(data);

      setPokemones(data.results);
      setAnterior(data.previous);
      setSiguiente(data.next);

    }
    
    obtenerPokemones();
  }, [actual]);

  return (
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