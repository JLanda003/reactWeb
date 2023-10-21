import React, { useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpFetch } from '../../helpers/helperFetch';
import Loader from './Loader';
import Message from './Message'


const CrudApi = () => {

  const API = helpFetch();
  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // console.log(API);

  useEffect(() => {
    // fetch('http://localhost:3004/equipos')
    // .then(respose => respose.json())
    // .then(data => {
    //   setEquipos(data);
    // });
    setLoading(true);
    API.get('equipos').then(response => {
      // console.log(response.error);
      if (!response.error) {
        setEquipos(response);
        setErrorMessage(null);
      } else {
        setEquipos(null);
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    })
  }, []);

  // insercion de datos
  const addEquipo = equipo => {
    setLoading(true);
    const options = {
      body : equipo
    }

    API.post('equipos', options).then(response => {
      if (!response.error) {
        setEquipos([...equipos, equipo]);
        setErrorMessage(null);
      } else {
        setEquipos(null);
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    });
  };

  //Editar equipos
  const editEquipo = equipo => {
    setLoading(true);
    const options = {
      body : equipo
    }

    API.put('equipos', options, equipo['id']).then(response => {
      if (!response.error) {
        const newEquipos = equipos.map(el => el.id === equipo.id ? equipo : el);
        setEquipos(newEquipos);
        setEditData(null);
        setErrorMessage(null);
      } else {
        setEquipos(null);
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    });
  };

  //Eliminar equipos
  const deleteEquipo = id => {
    const isDelete =
    window.confirm(`¿Desea eliminar el registro con id: ${id}?`);
    setLoading(true);

    if(isDelete){
      API.delT('equipos', id).then(response => {
        if(!response.error){
          const newEquipos = equipos.filter( el => el.id !== id );
          setEquipos(newEquipos);
          setErrorMessage(null);
        } else {
          setEquipos(null);
          setErrorMessage(response.statusText);
        }

        setLoading(false);
      });
    } else {
      setLoading(false);
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
    {/* Mostrar componente de carga en caso de que exista */}
    {/* { loading && <Loader /> } <- Forma usando una comparacion directa && <- Indica si y solo si es verdadero.*/}
    {/* { loading === true ? <Loader /> : null } <- Forma usando comparacion ternaria en caso de que exista, mostramos el loader, y en caso de que no exista, no mostrara nada. */}
    { 
      loading
      ? <Loader />
      : equipos &&
        <CrudTable
          equipos={equipos}
          setEditData={setEditData}
          deleteEquipo={deleteEquipo}
        />
    }

    { errorMessage && <Message text={ errorMessage } /> }

    {/* Mostrar la informacion, targetas, tabla, vista, etc.*/}
    {/* { equipos &&
      <CrudTable
        equipos={equipos}
        setEditData={setEditData}
        deleteEquipo={deleteEquipo}
      />
    } */}

  </>)
}

export default CrudApi