import React from 'react'
// import Text from './components/Texto';
import Contador from './components/Contador';
import './styles/App.css'
// import ListaNombre from './components/ListaNombre'

// class App extends React.Component{
//   render(){
//     return <p> Componente de clase </p>
//   }
// }/* PRIMERA VERSION DE COMPONENTES DE REACT */

const App = () => {
  return(
      <div className='container'>
        {/* <p>Hola soy un texto</p>
        <Text
        name="Joshua"
        apellido="Landa"
        edad="23" />
        <ListaNombre />
      */}
        <Contador /> 
      </div>
    )
}

export default App;