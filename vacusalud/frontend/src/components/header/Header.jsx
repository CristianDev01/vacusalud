import { Link } from "react-router-dom";
import { BotonLogin } from "./BotonLogin";
import { BotonMenu } from "./BotonMenu";
import CerrarSesion from "../autenticacion/CerrarSesion";

export function Header({ linksColor, buttonColor, loginText, menuColorBtn, menuColorBg, menuLoginBg, menuTextColor, linksVisibles, loginVisible, botonVisible, cerrarSesion, colorLogout }) {

  return (
    <>

    <div className="fixed bg-white top-0 w-full z-50">

      <div className={`flex items-center px-4 min-h-[68px] ${cerrarSesion ? "justify-between" : "justify-center md:justify-around" } previo-lg:px-20 2xl:px-40`}>

      <Link to={"/"} >
        <img src="/logo.svg" alt="VacuSalud" className="h-[50px] previo-sm:h-[68px] select-none" />
      </Link>

     {cerrarSesion && (
      <CerrarSesion color={colorLogout} />
      )}

      {linksVisibles && (
        <div className={`${linksColor} space-x-4 text-[10px] font-bold hidden md:flex tracking-tighter md:text-[11px] previo-lg:tracking-tight
        previo-lg:text-[12px]`} > 

          <a href="https://www.segurossura.com.co/paginas/ley-de-transparencia-eps.aspx" target="_blank" >
          Ley de transparencia
          </a>

          <a href="https://www.epssura.com/faqs" target="_blank" >
          Preguntas frecuentes
          </a>

          <a href="https://www.epssura.com/canales-de-contacto" target="_blank" >
          Canales de contacto
          </a>

        </div>
        )}

      {loginVisible && (
        <div className="hidden md:flex">  

          <Link to="/iniciar-sesion-tipo-de-usuario">
            <BotonLogin color={buttonColor} textColor={loginText} >
              INICIAR SESIÓN
            </BotonLogin>
          </Link>    
                
        </div>
        )}

      </div>
      
    </div> 
        
    {botonVisible && (
     <BotonMenu colorBtn={menuColorBtn} menuBg={menuColorBg} menuLoginColor={menuLoginBg} menuTextLogin={menuTextColor} />
      )}

    </>
  )
}