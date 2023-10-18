import React from 'react'
// import Text from './components/Texto';
// import Contador from './components/Contador';
import './styles/App.css'
// import Pokemones from './components/Pokemones';
import Estilos from './components/Estilos';
// import ListaNombre from './components/ListaNombre'
// import Referencia from './components/Referencia';

// class App extends React.Component{
//   render(){
//     return <p> Componente de clase </p>
//   }
// }/* PRIMERA VERSION DE COMPONENTES DE REACT */

const App = () => {
  return(
      <div className='container'>
        {/* <Text
        name="Joshua"
        apellido="Landa"
        edad="23" />
        <hr />
        <ListaNombre />
        <hr />
        <Contador />
        <hr /> 
        <Pokemones />
        <hr />
        <Referencia /> */}
        <Estilos />
      </div>
    )
}

export default App;