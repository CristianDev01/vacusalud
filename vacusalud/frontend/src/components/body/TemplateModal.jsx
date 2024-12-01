import MenuCerrar from "../icons/MenuCerrar";

export function TemplateModal({ abierto, cerrar, tituloModal, colorHeaderModal, children }) {

  if (!abierto) return null;
  
  return(

    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center overflow-auto ">
      <div className="w-[90%] relative pt-36 previo-sm:pt-40 previo-sm:w-[400px]">

        <button className="absolute right-0 text-white m-1" 
          onClick={cerrar}> <MenuCerrar width={"20px"} height={"20px"} />
        </button>

        <h1 className={`text-center ${colorHeaderModal} py-5 font-bold text-neutral-100`}>{tituloModal}</h1>
          
        <div>
          {children}
          <div className="h-12"></div>
        </div>

      </div>
    </div>

  )
}