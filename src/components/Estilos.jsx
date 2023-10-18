import React from 'react';
import '../styles/estilos.css';
import myStyles from '../styles/estilos.module.css'

const Estilos = () => {
  const estilos = {
    backgroundColor: '#124578',
    color: 'white',
    padding: 5
  }

  return (
    <>
      <h1>Estilos...</h1>

      <h3 style={{
        backgroundColor: 'Red',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>Estilos dento de la misma linea</h3>

      <h3 style={estilos}>Estilos con variables</h3>

      <h3 className='succes'>Estilos en hoja externa</h3>

      <h3 className={myStyles.error}>Estilos por modulos</h3>
    </>
  )
}

export default Estilos