import React from 'react'

const CrudTable = ({ equipos, setEditData, deleteEquipo }) => {
  return (<>
    <h3>Esquipos actuales</h3>
    <table className='table'>
      <thead>
        <tr>
          {/* <td>ID</td> */}
          <td>Equipo</td>
          <td>Pais</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
          equipos.length === 0 ? <tr><td>Sin datos</td></tr>
          : equipos.map((equipo, index) => {
            return <tr key={index}>
                    {/* <td>{equipo['id']}</td> */}
                    <td>{equipo['equipo']}</td>
                    <td>{equipo['pais']}</td>
                    <td>
                      <button
                        className='btn btn-outline-warning mx-1'
                        onClick={() => setEditData(equipo)}>Editar</button>
                      <button 
                        className='btn btn-outline-danger mx-1'
                        onClick={() => deleteEquipo(equipo['id'])}>Eliminar</button>
                    </td>
                  </tr>

          })
        }
      </tbody>
    </table>
  </>)
}

export default CrudTable