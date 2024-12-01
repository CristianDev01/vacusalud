import { NavBar } from "../header/NavBar";
import { Header } from "../header/Header";
import { ActualizarContrasenaEmpresa } from "../body/ActualizarContrasenaEmpresa";

export function EmpresaActualizarContrasena() {
  return(

    <>

    <Header 
    />

    <NavBar 
    barColor={"bg-emerald-900"}/>

    <ActualizarContrasenaEmpresa />

    </>

  )
}