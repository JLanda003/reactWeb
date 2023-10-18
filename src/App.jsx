import React from 'react'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Se debe de importar los css de bootstrap
import CrudApp from './components/crud/CrudApp'
// import Text from './components/Texto';
// import Contador from './components/Contador';
// import Bootstrap from './components/Bootstrap';
// import NavScrollExample from './components/Navbar'
// import Pokemones from './components/Pokemones';
// import Estilos from './components/Estilos';
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
        <Referencia />
        <Estilos />
        // <Bootstrap /> Antigua forma
        <NavScrollExample />
        */}
        <CrudApp />
      </div>
    )
}

export default App;