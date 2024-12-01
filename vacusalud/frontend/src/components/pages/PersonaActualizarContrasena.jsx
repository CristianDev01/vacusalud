import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"
import { ActualizarContrasenaPersona } from "../body/ActualizarContrasenaPersona"

export function PersonaActualizarContrasena() {
  return(
    <>

    <Header />

    <NavBar 
    barColor={"bg-stone-700"}/>

    <ActualizarContrasenaPersona />

    </>

  )
}