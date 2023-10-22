import { Link } from "react-router-dom"

const Menu = () => {
  return (
  <div className='d-flex flex-column justify-content-start'>
    <h2 className='text-center'>Menu</h2>
      <Link to='/modales' className='btn btn-primary m-1'>Modales</Link>
      <Link to='/contactform' className='btn btn-primary m-1'>Validacion Formulario</Link>
      <Link to='/crudapi' className='btn btn-primary m-1'>Crud Api</Link>
      <Link to='/crudapp' className='btn btn-primary m-1'>Crud App</Link>
      <Link to='/navscroll' className='btn btn-primary m-1'>NavScroll Example</Link>
      <Link to='/boostrap' className='btn btn-primary m-1'>Bootstrap</Link>
      <Link to='/estilos' className='btn btn-primary m-1'>Estilos</Link>
      <Link to='/referencias' className='btn btn-primary m-1'>Referencia</Link>
      <Link to='/pokemones' className='btn btn-primary m-1'>Pokemones</Link>
      <Link to='/listanombre' className='btn btn-primary m-1'>ListaNombre</Link>
      <Link to='/condator' className='btn btn-primary m-1'>Contador</Link>
  </div>
  )
}

export default Menu