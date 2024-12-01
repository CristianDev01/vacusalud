import { VerPacientesVacunados } from "../body/VerPacientesVacunados"
import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"

export function PacienteVacunados() {
  return(
    
    <>
    <Header 
    cerrarSesion
    colorLogout={"bg-emerald-900"}
    />

    <NavBar 
      barColor={"bg-emerald-900"}
    />

    <VerPacientesVacunados />

    </>
  )
}