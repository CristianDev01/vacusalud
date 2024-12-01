import { Cards } from "./Cards"
import { obtenerTitulo } from "./TituloCards"
import { obtenerParrafo } from "./ParrafoCards"
import { obtenerTituloSections } from "./TituloSections"
import svgSections from "./SvgSections"
import { imgCards } from "./ImagenesCards"
import { redireccionCards } from "./IrCards"

export function SectionsCard({ svgKey, tituloSectionKey, parrafoKey, tituloKey, BgColor,  irColor, arrowColor, imgKey, irKey }) {

  const tituloSection = obtenerTituloSections(tituloSectionKey)
  const obtenerSvg = svgSections[svgKey]

  return(
    <>

    <div className={`relative previo-lg:mt-0 h-[780px] md:h-[709px] previo-lg:h-[850px] xl:h-[497px]`} >

      <div className={`${BgColor} relative w-full h-[378px] flex items-center justify-center 
      md:h-[709px] md:w-[78%] 
      previo-lg:h-[850px] previo-lg:w-[42%] 
      xl:h-[497px]`}>

        <div className="relative flex flex-col justify-center items-center 
        md:w-full md:bottom-48
        previo-lg:top-5 previo-lg:right-[45px]">
          
          <h1 className="text-white font-bold text-[20px] leading-6
          md:text-[24px] md:leading-7 
          previo-lg:text-[28px] previo-lg:leading-8 
          xl:text-[32px] xl:leading-9">

          {tituloSection}
            
          </h1>

          <div className="mb-14 md:mb-2 previo-lg:mb-16 xl:mb-0">
            {obtenerSvg}
          </div>
            
        </div>
        
      </div>
      
      <div className="  relative w-full flex items-center bottom-[106px]
        md:bottom-[433px]
        previo-lg:justify-center previo-lg:bottom-[825px] previo-lg:pl-[110px] 
        xl:bottom-[477px] xl:pl-[357px]">

          <div className="relative grid grid-flow-col items-center gap-[22px] px-[10.5px] mx-[10.5px] pb-[16px] overflow-x-auto scrollbar-thin overflow-y-hidden
          md:flex md:gap-[16px] md:px-[5px] md:mx-[5px]
          previo-lg:grid previo-lg:grid-rows-2 previo-lg:w-auto previo-lg:h-[800px] previo-lg:py-5 previo-lg:gap-[21px] 
          xl:grid-rows-1 xl:h-auto xl:gap-[32px]">
          
            <Cards 
              titulo={obtenerTitulo(tituloKey, 0)}
              imagenes={imgCards(imgKey, 0)} 
              parrafo={obtenerParrafo(parrafoKey, 0)}
              url={redireccionCards(irKey, 0)}
              color={arrowColor}
              ir={irColor}>
            </Cards>
          
            <Cards 
              titulo={obtenerTitulo(tituloKey, 1)}
              imagenes={imgCards(imgKey, 1)} 
              parrafo={obtenerParrafo(parrafoKey, 1)}
              url={redireccionCards(irKey, 1)}
              color={arrowColor}
              ir={irColor}>
            </Cards>
            
            <Cards 
              titulo={obtenerTitulo(tituloKey, 2)}
              imagenes={imgCards(imgKey, 2)}
              parrafo={obtenerParrafo(parrafoKey, 2)}
              url={redireccionCards(irKey, 2)} 
              color={arrowColor}
              ir={irColor}>
            </Cards>
        
          </div>

      </div>


    </div>

    </>
  )
}