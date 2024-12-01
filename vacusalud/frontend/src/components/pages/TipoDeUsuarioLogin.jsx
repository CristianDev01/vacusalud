import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"
import { TipodeUsuario } from "../body/TipoDeUsuario"

export function TipoDeUsuarioLogin() {
  return (
    <>
    
    <Header />

    <NavBar
      barColor={"bg-cyan-800"}>
    </NavBar>

    <TipodeUsuario />

    </>
  )
  
}