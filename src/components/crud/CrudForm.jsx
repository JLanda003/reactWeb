import React, { useEffect, useState } from 'react'

const CrudForm = ({ addEquipo, editData, editEquipo }) => {
  const [formData, setFormData] = useState({
    id: null,
    equipo: '',
    pais: ''
  })

  useEffect(() => {
    if (editData !== null){
      setFormData(editData)
    }else{
      setFormData({
        id : null,
        equipo : '',
        pais : ''
      });
    }
  }, [editData]);

  
  const handleSubmit = (e) => {
    e.preventDefault(); //Evita que se recargue la pagina
    
    if ( formData.equipo !== '' && formData.pais !== '' ) {
      if ( editData !== null ){
        editEquipo(formData);
      } else {
        formData.id = Date.now()
        addEquipo(formData)
        setFormData({
          equipo: '',
          pais: '',
          id: null
        });
      }
    } else {
      alert('Por favor agregue un equipo y un pais.');
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  return (<>

    <form className='m-3' onSubmit={handleSubmit}>
      <label htmlFor="equipo">Equipo:</label>
      <input
        type="text"
        name='equipo'
        onChange={handleChange}
        value={formData.equipo} />
      <label htmlFor="pais">Pais:</label>
      <input
        type="text"
        name='pais'
        onChange={handleChange}
        value={formData.pais} />
      <input
        type="submit"
        value="Guardar"
        className='btn btn-success mx-1' />
      <input
        type="reset"
        value="Cancelar"
        className='btn btn-danger mx-1' />
    </form>

  </>)
}

export default CrudForm