import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const db = [
  { id: 1, equipo: 'Barcelona', pais: 'España' },
  { id: 2, equipo: 'Guadalajara', pais: 'México' },
  { id: 3, equipo: 'Boca JR', pais: 'Argentina' },
  { id: 4, equipo: 'Mancheser City', pais: 'Inglaterra' },
  { id: 5, equipo: 'Real Madrid', pais: 'España' }
]

const CrudApp = () => {

  const [equipos, setEquipos] = useState(db);
  const [editData, setEditData] = useState(null);

  // insercion de datos
  const addEquipo = equipo =>{
    setEquipos([
      ...equipos,
      equipo
    ])
  }

  const editEquipo = equipo => {
    const newEquipos = equipos.map(el => el.id === equipo.id ? equipo : el)
    setEquipos(newEquipos)
    setEditData(null)
  }

  return (<>

    <h2>Crud Equipos de futbol</h2>

    {/* Formulario para los datos */}
    <CrudForm
      addEquipo={addEquipo}
      editData={editData}
      editEquipo={editEquipo}
    />

    {/* Mostrar la informacion, targetas, tabla, vista, etc.*/}
    <CrudTable
    equipos={equipos}
    setEditData={setEditData}
    />

  </>)
}

export default CrudApp