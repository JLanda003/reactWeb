import useForm from '../hooks/useFrom'

const ContactForm = () => {

  const initialData = {
    nombre : '',
    correo : '',
    asunto : '',
    mensaje : ''
  }

  const { form, loading, handleChage, handleSubmit } = useForm(initialData);

  return (
      <form className='w-100'>
        <label className='form-label'>Nombre(s)</label>
        <input
          type='text'
          className='form-control'
          name='nombre'
          value={form.nombre}
          onChange={handleChage}
        />
        
        <label className='form-label'>Correo electronico</label>
        <input 
          type='email'
          className='form-control'
          name='correo'
          value={form.correo}
          onChange={handleChage}
        />

        <label className='form-label'>Asunto</label>
        <input
          type='text'
          className='form-control'
          name='asunto'
          value={form.asunto}
          onChange={handleChage}
        />

        <label className='form-label'>Mensaje</label>
        <textarea
          className='form-control'
          name='mensaje'
          value={form.mensaje}
          onChange={handleChage}
        />

        <button className='btn btn-warning mt-1 w-100'>Enviar</button>
      </form>
  )
}

export default ContactForm