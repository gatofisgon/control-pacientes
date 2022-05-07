import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, diaAlta, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Estás seguro de que quieres eliminar este paciente?');
    if(respuesta){
      eliminarPaciente(id);
    }
  }

  return (
    <div className='m-3 bg-white py-10 px-5 rounded-xl shadow-md'>
        <p className='font-bold mb-3 text-bold text-gray-700 uppercase'>Nombre: {""}
        <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-bold text-gray-700 uppercase'>Propietario: {""}
        <span className='font-normal normal-case'>{propietario}</span>
        </p>
        <p className='font-bold mb-3 text-bold text-gray-700 uppercase'>Email: {""}
        <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-bold text-gray-700 uppercase'>Dia de Alta: {""}
        <span className='font-normal normal-case'>{diaAlta}</span>
        </p>
        <p className='font-bold mb-3 text-bold text-gray-700 uppercase'>Sintomas: {""}
        <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className='flex justify-between mt-10'>
          <button
            type="button"
            className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg'
            onClick={() => setPaciente(paciente)}
          >Editar</button>
          <button
            type="button"
            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg'
            onClick={handleEliminar}
          >Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente