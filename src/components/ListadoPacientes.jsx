import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  


  
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll'>

    {pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-4xl text-center">Listado de Pacientes</h2>
      <p className='text-center text-2xl font-black mt-3 mb-10'>Administra tus pacientes {""} <span className='text-indigo-600'>y citas</span></p>

      {
        pacientes.map(paciente => (
          <Paciente 
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))
      }
      </>
    ) 
    : 
    (
      <>
      <h2 className="font-black text-4xl text-center">Aún no hay pacientes</h2>
      <p className='text-center text-2xl font-black mt-3 mb-10'>Agregalos y aparecerán {""} <span className='text-indigo-600'>aquí abajo</span></p>
      </>
    )}


      
      
    </div>
  )
}

export default ListadoPacientes