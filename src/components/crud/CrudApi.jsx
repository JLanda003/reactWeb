import React, { useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpFetch } from '../../helpers/helperFetch';



const CrudApi = () => {

  const API = helpFetch();
  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState([]);

  // console.log(API);

  useEffect(() => {
    // fetch('http://localhost:3004/equipos')
    // .then(respose => respose.json())
    // .then(data => {
    //   setEquipos(data);
    // });
    API.get('equipos').then(response => {
      if (!response.error) setEquipos(response);
    })
  }, []);

  // insercion de datos
  const addEquipo = equipo => {
    const options = {
      body : equipo
    }

    API.post('equipos', options).then(response => {
      if (!response.error) setEquipos([...equipos, equipo])
    });
  };

  //Editar equipos
  const editEquipo = equipo => {
    const options = {
      body : equipo
    }

    API.put('equipos', options, equipo['id']).then(response => {
      if (!response.error) {
        const newEquipos = equipos.map(el => el.id === equipo.id ? equipo : el)
        setEquipos(newEquipos)
        setEditData(null)
      }
    });
  };

  //Eliminar equipos
  const deleteEquipo = id => {
    const isDelete =
      window.confirm(`¿Desea eliminar el registro con id: ${id}?`);

    if(isDelete){
      API.delT('equipos', id).then(response => {
        if(!response.error){
          const newEquipos = equipos.filter( el => el.id !== id );
          setEquipos(newEquipos);
        }
      });
    }
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