import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? "[]";
      setPacientes(pacientesLS);
  }, [])

  

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("pacientes", JSON.stringify(pacientes))
    }, 1000)
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const nuevoPacientes = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(nuevoPacientes);
  }

  return (
    <div className="container mx-auto">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          paciente={paciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
