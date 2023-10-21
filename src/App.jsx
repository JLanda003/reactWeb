import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Se debe de importar los css de bootstrap
import CrudApi from './components/crud/CrudApi';
import CrudApp from './components/crud/CrudApp';
import Text from './components/Texto';
import Contador from './components/Contador';
import Bootstrap from './components/Bootstrap';
import NavScrollExample from './components/Navbar';
import Pokemones from './components/Pokemones';
import Estilos from './components/Estilos';
import ListaNombre from './components/ListaNombre';
import Referencia from './components/Referencia';
import { Container } from 'react-bootstrap';

// class App extends React.Component{
//   render(){
//     return <p> Componente de clase </p>
//   }
// }/* PRIMERA VERSION DE COMPONENTES DE REACT */

const App = () => {
  return(
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/condator' element={ <Contador /> } />
            <Route path='/listanombre' element={ <ListaNombre /> } />
            <Route path='/pokemones' element={ <Pokemones /> } />
            <Route path='/referencias' element={ <Referencia /> } />
            <Route path='/estilos' element={ <Estilos /> } />
            <Route path='/boostrap' element={ <Bootstrap /> } />
            <Route path='/navscroll' element={ <NavScrollExample /> } />
            <Route path='/crudapp' element={ <CrudApp /> } />
            <Route path='/crudapi' element={ <CrudApi /> } />
            <Route path='*' element={<h2>Curso React</h2>} />
          </Routes>
        </BrowserRouter>
        {/* <Text
        name="Joshua"
        apellido="Landa"
        edad="23" />
        <ListaNombre />
        <Contador /> 
        <Pokemones />
        <Referencia />
        <Estilos />
        <Bootstrap /> {//Antigua forma}
        <NavScrollExample />
        <CrudApp />
        <CrudApi /> */}
      </div>
    )
}

export default App;