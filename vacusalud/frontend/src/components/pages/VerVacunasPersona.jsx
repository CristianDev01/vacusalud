import { Header } from "../header/Header";
import { NavBar } from "../header/NavBar";
import { VerVacunasAplicadasPersona } from "../body/VerVacunasAplicadasPersona";

export function VerVacunasPersona() {
  return(
    
    <>
    
    <Header 
      cerrarSesion
      colorLogout={"bg-stone-700"}/>

    <NavBar 
      barColor={"bg-stone-700"}/>

    <VerVacunasAplicadasPersona />

    </>

  )
}