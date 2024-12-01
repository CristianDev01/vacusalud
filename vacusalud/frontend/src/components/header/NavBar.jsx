import { Link } from "react-router-dom";
import { HoverAnimation } from "./HoverAnimation";

export function NavBar({ barColor, linksVisibles }) {
  return (
    
    <div className= {`${barColor} fixed w-full top-[68px] z-30`}>

      <div className="flex items-center justify-around min-h-[34px]">

        {linksVisibles && (
        <div className="text-neutral-100 gap-5 font-extrabold text-[13px] hidden md:flex
        previo-lg:text-[14px] previo-lg:gap-7 xl:gap-9">

          <Link to="/">
            <HoverAnimation>INICIO</HoverAnimation>
          </Link> 
        
          <Link to="/hospitales">
            <HoverAnimation>HOSPITALES</HoverAnimation>
          </Link>
          
          <Link to="/clinicas">
            <HoverAnimation>CLÍNICAS</HoverAnimation>
          </Link>
          
          <Link to="/centros-de-salud">
            <HoverAnimation>CENTROS DE SALUD</HoverAnimation>
          </Link>
          
          <Link to="/ips">
            <HoverAnimation>IPS</HoverAnimation>
          </Link>
          
          <Link to="/laboratorios">
            <HoverAnimation>LABORATORIOS</HoverAnimation>
          </Link>
          
        </div>
        )}

      </div>
      
    </div>

  )
}