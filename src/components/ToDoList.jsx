const ToDoList = () => {
  return (
    <div className='container w-75'>
      <form className='input-group shadow rounded p-3'>
        <input 
          className='form-control'
          type='text'
          placeholder='Titulo'
        />
        <input 
          className='form-control'
          type='text'
          placeholder='Descripción'
        />
        <input 
          className='btn btn-primary'
          type='submit'
          value='Agregar tarea'
        />
      </form>
      <div className='shadow rounded p-3 mt-5 w-100'>
        <div className='d-flex align-items-center justify-content-between list-group-item'>
          <h5>Lista de tares</h5>
          <button className='btn btn-danger'>Eliminar tareas realizadas</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoList