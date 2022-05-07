import React, { useEffect } from 'react'
import { useState } from 'react'

const Formulario = ({setPacientes, setPaciente, pacientes, paciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [diaAlta, setDiaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setDiaAlta(paciente.diaAlta);
      setSintomas(paciente.sintomas);
    } 
  }, [paciente]);

  const generarId = () => {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario
    if ([nombre, propietario, email, diaAlta, sintomas].includes('')) {
      alert('Por favor, rellena todos los campos')
      return;
    }

    //Creación del nuevo paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      diaAlta,
      sintomas,
    }

    if(paciente.id) {

      objetoPaciente.id = paciente.id;
      const nuevoPacientes = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(nuevoPacientes);
      setPaciente({});

    } else {

      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);

    }

    //Agregar el nuevo paciente al array de pacientes

    //Limpiar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setDiaAlta('');
    setSintomas('');

  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>

      <h2 className="font-black text-4xl text-center">Seguimiento de Pacientes</h2>

      <p className='text-center text-2xl font-black mt-3 mb-10'>Agrega pacientes y {""}
      <span className='text-indigo-600'>Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="mb-3 bg-white shadow-md py-10 px-5 rounded-lg"
      >
        <div className='mb-5'>
          <label htmlFor="mascota" className='block font-bold uppercase'>Nombre Mascota</label>
          <input 
            id="mascota"
            type="text"
            placeholder='Nombre de la Mascota'
            className='placeholder-gray-400 border-2 w-full rounded-md mt-2'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block font-bold uppercase'>Nombre del Propietario</label>
          <input 
            id="propietario"
            type="text"
            placeholder='Nombre del Propietario'
            className='placeholder-gray-400 border-2 w-full rounded-md mt-2'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block font-bold uppercase'>Email del Propietario</label>
          <input 
            id="email"
            type="email"
            placeholder='Email del Propietario'
            className='placeholder-gray-400 border-2 w-full rounded-md mt-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block font-bold uppercase'>Dia de Alta</label>
          <input 
            id="alta"
            type="date"
            className='placeholder-gray-400 border-2 w-full rounded-md mt-2'
            value={diaAlta}
            onChange={(e) => setDiaAlta(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block font-bold uppercase'>Sintomas</label>
          <textarea 
          id="sintomas"
          className='placeholder-gray-400 border-2 w-full rounded-md mt-2'
          placeholder='Describe los sintomas'
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input 
        value={paciente.id ? 'Editar' : 'Agregar paciente'}
        type="submit"
        className='w-full bg-indigo-600 padding-3 text-white uppercase font-bold rounded-md p-3 hover:bg-indigo-700 cursor-pointer transition-all'
        />
      </form>
    </div>
  )
}

export default Formulario