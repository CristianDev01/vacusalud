import { Link } from "react-router-dom"
import { CardTipoDeUsuario } from "./CardTipoDeUsuario"
import LogoAdministrador from "../icons/LogoAdministrador"
import LogoEmpresa from "../icons/LogoEmpresa"
import LogoPersona from "../icons/LogoPersona"

export function TipodeUsuario() {
  return (

    <div className="relative pt-[102px] max-w-full min-h-[91.5vh] flex flex-col
    previo-sm:min-h-[91.9vh] md:min-h-[85.3vh]">

      <div className="relative mt-[11vh] text-[14px] text-center font-medium text-cyan-800 text-pretty previo-sm:text-[16px] sm:text-[18px] previo-lg:text-[22px] ">

        <h1 className=" tracking-tight previo-sm:tracking-normal">
          Para <strong>iniciar sesión</strong>, elige tu relación con nosotros
        </h1>
        <hr className="mx-auto mt-1 border-cyan-800/25 w-[97%] previo-sm:w-[410px] sm:w-[500px] previo-lg:w-[700px] " />

      </div>

      <div className="relative w-full mt-[10vh] flex justify-center gap-3 text-center font-bold text-cyan-800 sm:gap-5 previo-lg:gap-7">

        <Link to={"/iniciar-sesion-administrador"} >
          <CardTipoDeUsuario usuario={"Administrador"} >
            <LogoAdministrador className="w-[75%] sm:w-[85%] previo-lg:w-[100%]"/>
          </CardTipoDeUsuario>
        </Link>
        
        <Link to={"/iniciar-sesion-empresa"}>
          <CardTipoDeUsuario usuario={"Empresa"} >
            <LogoEmpresa className="w-[80%] sm:w-[90%] previo-lg:w-[100%]"/>
          </CardTipoDeUsuario>
        </Link>

        <Link to={"/iniciar-sesion-persona"}>
          <CardTipoDeUsuario usuario={"Persona"} >
            <LogoPersona className="w-[80%] sm:w-[90%] previo-lg:w-[100%]"/>
          </CardTipoDeUsuario>
        </Link>

      </div>

    </div>

  )
}