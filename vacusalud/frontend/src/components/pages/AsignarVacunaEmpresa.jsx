import { AsignarVacuna } from "../body/AsignarVacuna"
import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"

export function AsignarVacunaEmpresa() {
  return(
    <>

    <Header 
    cerrarSesion
    colorLogout={"bg-emerald-900"}
    />
    
    <NavBar 
      barColor={"bg-emerald-900"}
    />

    <AsignarVacuna />

    </>
  )
}