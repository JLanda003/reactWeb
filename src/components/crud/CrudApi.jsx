import React, { useEffect, useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'



const CrudApi = () => {

  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/equipos')
    .then(respose => respose.json())
    .then(data => {
      setEquipos(data);
    });
  }, []);

  // insercion de datos
  const addEquipo = equipo => {

  };

  //Editar equipos
  const editEquipo = equipo => {

  };

  //Eliminar equipos
  const deleteEquipo = id => {

  };

  return (<>

    <h2>Crud Api de Equipos</h2>

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
      deleteEquipo={deleteEquipo}
    />

  </>)
}

export default CrudApi