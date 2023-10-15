import React, { useState } from 'react'

const ListaNombre = () => {
  const [nombre, setNombre] = useState('');
  const [nombres, setNombres] = useState([]);

  const save = () => {
    setNombres([...nombres, nombre]);
    setNombre('');
  }

  return (
    <>
    <input
    type="text"
    value={nombre}
    onChange={(e) => { setNombre(e.target.value) }}
    placeholder='Ingrese su nombre' />
    <button onClick={save}>Enviar</button>
    <p>Lista de nombres: </p>
    <ul>
      {
        nombres.map((element, index) => {
          return <li key={index}>{element}</li>
        })
      }
    </ul>
    </>
  )
}

export default ListaNombre