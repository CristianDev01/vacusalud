import { Link } from "react-router-dom"
import { BotonLogin } from "../header/BotonLogin"

export function TemplateFormulario ({ label, nameBotton, colorBoton, colorTextBoton, renderRestablecer, restablecerContrasena, children }) {

  return(

    <div className="relative max-w-full min-h-screen flex flex-col items-center justify-center">

      <div className="relative flex justify-center ">
        <Link to={"/"}>
          <img src="/logo.svg" alt="VacuSalud" className="h-[49px] previo-sm:h-[78px]" />
        </Link>
      </div>

      <div className="w-[280px] relative my-8 mb-16 border rounded-md border-neutral-200 shadow-md previo-sm:w-[420px]">

      <div className="flex justify-center items-center h-20">
        <label className="text-[20px] font-semibold previo-sm:text-[24px] text-neutral-900/80 ">
          {label}
        </label>
      </div>

        <div className="flex flex-col gap-3 px-7 text-[12px] font-medium previo-sm:text-[16px] previo-sm:px-9 ">
          {children}    
        </div>

        <div className={`${renderRestablecer ? "h-[110px]" : "h-[80px]" } flex flex-col justify-center items-center gap-4 previo-sm:flex-row previo-sm:h-[110px]`} >
          
          {renderRestablecer && (
            <Link to={restablecerContrasena}>
              <span className="text-[10px] text-cyan-800 font-semibold tracking-tight previo-sm:text-[12px] ">
                ¿Haz olvidado tu contraseña?
              </span>
            </Link>
          )}

          <BotonLogin color={colorBoton} textColor={colorTextBoton} >
            {nameBotton} 
          </BotonLogin>

        </div>

      </div>

    </div>

  )
}