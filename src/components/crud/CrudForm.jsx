import React from 'react'

const CrudForm = () => {
  return (
  <>

    <form className='m-3'>
      <label htmlFor="equipo">Equipo:</label>
      <input type="text" name='equipo' />
      <label htmlFor="pais">Pais:</label>
      <input type="text" name='pais' />
      <input type="submit" value="Agregar" className='btn btn-success mx-1'/>
      <input type="reset" value="Cancelar" className='btn btn-danger mx-1'/>
    </form>

  </>
  )
}

export default CrudForm