import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const db = [
  { id: 0, equipo: 'Barcelona', pais: 'España' },
  { id: 1, equipo: 'Guadalajara', pais: 'México' },
  { id: 2, equipo: 'Boca JR', pais: 'Argentina' },
  { id: 3, equipo: 'Mancheser City', pais: 'Inglaterra' },
  { id: 4, equipo: 'Real Madrid', pais: 'España' }
]

const CrudApp = () => {

  const [equipos, setEquipos] = useState(db);

  return (
    <>

    <h2>Crud Equipos de futbol</h2>

    {/* Formulario para los datos */}
    <CrudForm />

    {/* Mostrar la informacion, targetas, tabla, vista, etc.*/}
    <CrudTable equipos={equipos}/>

    </>
  )
}

export default CrudApp