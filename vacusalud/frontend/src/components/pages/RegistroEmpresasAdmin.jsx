import { RegistroEmpresa } from "../formularios/RegistroEmpresa";
import { Header } from "../header/Header";
import { NavBar } from "../header/NavBar";

export function RegistroEmpresasAdmin() {

  return(
    <>
    <Header 
      cerrarSesion
      colorLogout={"bg-indigo-900"}
    />

    <NavBar 
    barColor={"bg-indigo-900"}
    />

    <RegistroEmpresa />

    </>
    
  )
}