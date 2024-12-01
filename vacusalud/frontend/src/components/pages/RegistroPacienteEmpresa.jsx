import { RegistroPaciente } from "../formularios/RegistroPaciente"
import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"

export function RegistroPacienteEmpresa() {
  return(

    <>
    
    <Header 
    cerrarSesion
    colorLogout={"bg-emerald-900"}
    />

    <NavBar 
    barColor={"bg-emerald-900"}
    />
    
    <RegistroPaciente />

    </>
  )
}