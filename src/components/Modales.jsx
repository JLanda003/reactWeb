import { useState } from 'react'
import Contador from './Contador'
import ContactForm from './ContactForm';
import Modal from './Modal'

const Modales = () => {
  const [mostrar, setMostrar] = useState(false);
  const [verContador, setVerContador] = useState(false);
  const [verFormulario, setVerFormulario] = useState(false);

  return (
    <div className='wv-100'>
      <h1>Modales</h1>
      <button className='btn btn-success m-1' onClick={() => setMostrar(true)}>Ver modal</button>
      <Modal isOpen={mostrar} onClose={() => setMostrar(false)} >
        <h2>Prueba de children</h2>
      </Modal>

      {/* Mostrar modulo/objeto/componente con uso de childrens */}
      <button className='btn btn-success m-1' onClick={() => setVerContador(true)}>Ver condador</button>
      <Modal isOpen={verContador} onClose={() => setVerContador(false)} >
        <Contador />
      </Modal>

      <button className='btn btn-success m-1' onClick={() => setVerFormulario(true)}>Ver Fromulario</button>
      <Modal isOpen={verFormulario} onClose={() => setVerFormulario(false)} >
        <ContactForm />
      </Modal>
    </div>
  )
}

export default Modales