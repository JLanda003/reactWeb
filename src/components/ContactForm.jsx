import useForm from '../hooks/useFrom'

const ContactForm = () => {
  
  const initialData = {
    nombre : '',
    correo : '',
    asunto : '',
    mensaje : ''
  }
  
  const onValidate = form => {
    let isError = false;
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()){
      errors.nombre = 'El campo "Nombre" no debe ser vacio.';
      isError = true;
    } else if (!regexName.test(form.nombre)){
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
      isError = true;
    }
    
    if (!form.correo.trim()){
      errors.correo = 'El campo "correo" no debe ser vacio.';
      isError = true;
    } else if (!regexEmail.test(form.correo)){
      errors.correo = 'El campo "correo" contiene un formato no valido.';
      isError = true;
    }
    if (!form.asunto.trim()){
      errors.asunto = 'El campo "asunto" no debe ser vacio.';
      isError = true;
    } else if (!regexName.test(form.asunto)){
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
      isError = true;
    }

    if (!form.mensaje.trim()){
      errors.mensaje = 'El campo "mensaje" no debe ser vacio.';
      isError = true;
    } else if (!regexComments.test(form.mensaje)){
      errors.mensaje = 'El campo "mensaje" solo acepta 255 caracteres.';
      isError = true;
    }

    return isError ? errors : null;
  }

  const { form, errors, loading, handleChage, handleSubmit } = useForm(initialData, onValidate);

  return (
      <form
        className='w-100'
        onSubmit={handleSubmit}
      >

        <label className='form-label'>Nombre</label>
        <input
          type='text'
          className='form-control'
          name='nombre'
          value={form.nombre}
          //onBlur={ e => console.log(e.target.value) } <- Evento para detectar cuando salgas del campo
          onChange={handleChage}
        />
        { errors.nombre && <div className='alert alert-danger p-1'>{errors.nombre}</div> }

        
        <label className='form-label'>Correo electronico</label>
        <input 
          type='email'
          className='form-control'
          name='correo'
          value={form.correo}
          onChange={handleChage}
        />
        { errors.correo && <div className='alert alert-danger p-1'>{errors.correo}</div> }

        <label className='form-label'>Asunto</label>
        <input
          type='text'
          className='form-control'
          name='asunto'
          value={form.asunto}
          onChange={handleChage}
        />
        { errors.asunto && <div className='alert alert-danger p-1'>{errors.asunto}</div> }

        <label className='form-label'>Mensaje</label>
        <textarea
          className='form-control'
          name='mensaje'
          value={form.mensaje}
          onChange={handleChage}
        />
        {errors.mensaje && <div className='alert alert-danger p-1'>{errors.mensaje}</div>}

        <button className='btn btn-warning mt-1 w-100'>Enviar</button>

      </form>
  )
}

export default ContactForm