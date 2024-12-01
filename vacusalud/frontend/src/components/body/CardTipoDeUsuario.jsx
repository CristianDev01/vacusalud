
export function CardTipoDeUsuario( {children, usuario } ) {
  return (

    <div className=" h-[100px] w-[90px] previo-sm:h-[140px] previo-sm:w-[130px]  previo-lg:h-[160px] previo-lg:w-[150px] ">

      <div className="h-full w-full border rounded-xl border-cyan-800/25 flex items-center justify-center mb-1 previo-sm:mb-2" >
        {children}
      </div>

      <span className="text-[12px] previo-sm:text-[14px] sm:text-[16px] previo-lg:text-[18px]">
        {usuario}
      </span>

    </div>

  )
}