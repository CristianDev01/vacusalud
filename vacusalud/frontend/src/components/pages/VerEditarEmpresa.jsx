import { VerEditarEmpresa } from "../body/VerEditarEmpresa"
import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"

export function VerEditarEmpresaAdmin() {
  return(

    <>
      <Header 
      cerrarSesion
      colorLogout={"bg-indigo-900"}
      />

      <NavBar 
        barColor={"bg-indigo-900"}
      />

      <VerEditarEmpresa />
    </>

  )
}