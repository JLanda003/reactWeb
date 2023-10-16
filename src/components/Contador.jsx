import React, { useState, useEffect } from 'react'

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Funcionamiento por defecto
  useEffect(() => {
    console.log ("useEffect!!");
  });

  //useEffect se ejecute una sola ocacion
  useEffect(() => {
    console.log("Una sola vez")
  }, []);
  
  //useEffect con control
  useEffect(() => {
    console.log("Contador: ", contador)
  }, [contador]);

  useEffect(() => {
    console.log ("Contador2: ", contador2);
  }, [contador2]);
  
  return (
    <div>
      <p>Valor actual del contador: {contador}</p>
      <button onClick={ () => { setContador( contador - 1 ) } }>Disminuir</button>
      <button onClick={ () => { setContador ( 0 ) } }>Restablecer</button>
      <button onClick={ () => { setContador2( contador2 + 1 ) } }>Aumentar</button>
    </div>
  )
}

export default Contador