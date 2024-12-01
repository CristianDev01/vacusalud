import IrArrow from "../icons/IrArrow"

export function Cards({ titulo, parrafo, imagenes, ir, color, url }) {
  return (
    
      <div className="relative bg-white h-[416px] w-[298px] shadow-md 
      md:w-full md:h-[392px]
      previo-lg:w-[225px]
      xl:w-[255px] xl:h-[417px]">
        
      <img src={imagenes} alt="Noticia" className="h-[198px] md:h-[47%] xl:h-[178px] w-full p-[0.8px] pointer-events-none select-none " />
        
      <h1 className="h-[40px] flex justify-center items-center text-[15px] font-bold tracking-tight leading-4 text-pretty my-2.5 mx-3 opacity-80 text-neutral-900 select-none">
        {titulo}
      </h1>

      <p className="text-[14px] font-medium tracking-tight leading-tight mx-3 opacity-80 line-clamp-5 text-neutral-900 select-none ">
        {parrafo}
      </p>
          
      <div className="absolute bottom-3 right-3">

        <a href={url} target="_blank" className="inline-flex items-center select-none">        
          <span className={`font-bold text-[15px] ${ir} p-2`} >IR</span>
          <IrArrow currentColor={color}/>
        </a>

      </div>
      
      </div>
  )
}