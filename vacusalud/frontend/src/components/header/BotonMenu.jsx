import { useState } from "react"
import { Link } from "react-router-dom"
import MenuAbrir from "../icons/MenuAbrir"
import MenuCerrar from "../icons/MenuCerrar"
import { HoverAnimation } from "./HoverAnimation"
import { BotonLogin } from "./BotonLogin"
import { useMediaQuery } from "@uidotdev/usehooks"
import { useEffect } from "react"


export function BotonMenu({ colorBtn, menuBg, menuLoginColor, menuTextLogin }) {

  const [menuVisible, setMenuVisible] = useState(false);
  const tamañoPantalla = useMediaQuery('(min-width:768px)');

    const mostrarMenu = () => {
      setMenuVisible(!menuVisible)
    }

  useEffect(() => {
    if (tamañoPantalla) {
      setMenuVisible(false)
    }
  },[tamañoPantalla]);

  return (
    <>
    
    <div className={`${menuBg} fixed top-0 inset-0 transition-transform duration-500 z-30 md:hidden ${ menuVisible ? "translate-y-0" : "-translate-y-full"} overflow-y-auto `} >

      <div className="relative w-full top-[120px] text-[11px] font-bold px-6 text-neutral-100 flex flex-col previo-sm:text-[13px]">
        
        <Link className="p-3 border-b border-neutral-100/20" to="/">
          <HoverAnimation>INICIO</HoverAnimation>
        </Link> 
        
        <Link className="p-3 border-b border-neutral-100/20" to="/hospitales">
          <HoverAnimation>HOSPITALES</HoverAnimation>
        </Link>
          
        <Link className="p-3 border-b border-neutral-100/20" to="/clinicas">
          <HoverAnimation>CLÍNICAS</HoverAnimation>
        </Link>
          
        <Link className="p-3 border-b border-neutral-100/20" to="/centros-de-salud">
          <HoverAnimation>CENTROS DE SALUD</HoverAnimation>
        </Link>
          
        <Link className="p-3 border-b border-neutral-100/20" to="/ips">
          <HoverAnimation>IPS</HoverAnimation>
        </Link>
          
        <Link className="p-3 border-b border-neutral-100/20" to="/laboratorios">
          <HoverAnimation>LABORATORIOS</HoverAnimation>
        </Link>

        <a className="p-3 border-b border-neutral-100/20"
          href="https://www.segurossura.com.co/paginas/ley-de-transparencia-eps.aspx"
          target="_blank" >
          LEY DE TRANSPARENCIA
        </a>

        <a className="p-3 border-b border-neutral-100/20"
          href="https://www.epssura.com/faqs"
          target="_blank" >
          PREGUNTAS FRECUENTES
        </a>

        <a className="p-3 border-b border-neutral-100/20"
          href="https://www.epssura.com/canales-de-contacto"
          target="_blank" >
          CANALES DE CONTACTO
        </a>

        <div className="flex justify-center mt-[34px] mb-[60px] ">  

          <Link to="/iniciar-sesion-tipo-de-usuario">
            <BotonLogin color={menuLoginColor} textColor={menuTextLogin} >
              INICIAR SESIÓN
            </BotonLogin>
          </Link>   

        </div>

      </div>

    </div>

      <button onClick={mostrarMenu} className={`${colorBtn} fixed flex items-center min-h-[68px] top-0 right-0 px-4 transition outline-none z-50 md:hidden`}>
      { menuVisible ? <MenuCerrar /> : <MenuAbrir /> }
      </button>
      
    </>
  )
}