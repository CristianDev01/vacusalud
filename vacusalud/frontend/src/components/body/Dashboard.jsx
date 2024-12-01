import { Link } from "react-router-dom"
import { CardTipoDeUsuario } from "./CardTipoDeUsuario"

export function Dashboard({ titulo, colorDashboard, colorDashboard2, subTitulo1, subTitulo2, subTitulo3,imgDashboard, option1, option2, option3, option4, img1, img2, img3, img4, to1, to2, to3, to4, card1, card2, card3, card4, cardPersona }) {
  return (

    <div className="relative flex flex-col top-[68px] max-w-full ">

      <div className="relative flex">

        <div className={`${colorDashboard} w-full h-[200px] flex flex-col justify-center items-center gap-4 previo-sm:h-[300px]`}>
          
          <h1 className="text-[15px] font-semibold text-center text-neutral-100 px-2
          previo-sm:text-[20px]
          md:text-[24px]
          previo-lg:text-[30px]">
            {titulo}
          </h1>

          <p className="px-2 text-balance text-center text-[11px] text-neutral-200
          previo-sm:text-[15px]
          md:text-[18px] md:px-8
          previo-lg:text-[20px] "> {subTitulo1} <strong > {subTitulo2} </strong> {subTitulo3} </p>

        </div>

        <div className={`${colorDashboard2} w-full h-[200px] flex justify-center items-end previo-sm:h-[300px]`}>
      
          <img src={imgDashboard} alt="Dashboard admin" className=" h-[150px] object-cover previo-sm:h-[250px] select-none" />
      
        </div>

      </div>

      <div className={`w-full justify-items-center text-center font-bold text-neutral-900/90
       md:mt-[140px] md:mb-[264px] previo-lg:mb-[240px]
      ${cardPersona ? "mb-[272px] mt-[100px] previo-sm:mb-[328px] previo-sm:mt-[140px]" : "mt-[60px] mb-[155px] previo-sm:mb-[198px] previo-sm:mt-[75px]" }`} >
      
      <div className="grid grid-cols-2 gap-14 md:flex leading-3 previo-sm:leading-4 md:leading-5">
      
      {option1 && (
      <Link to={to1}>
        <CardTipoDeUsuario usuario={card1} >
          <img src={img1} alt="img1" 
          className="w-[75%]"/>
        </CardTipoDeUsuario>
      </Link>
      )}
        
      {option2 && (
      <Link to={to2}>
        <CardTipoDeUsuario usuario={card2} >
          <img src={img2} alt="img2"
          className="w-[75%]"/>
        </CardTipoDeUsuario>
      </Link>
      )}

      {option3 && (
      <Link to={to3}>
        <CardTipoDeUsuario usuario={card3} >
          <img src={img3} alt="img3"
          className="w-[75%]"/>
        </CardTipoDeUsuario>
      </Link>
      )}

      {option4 && (
      <Link to={to4}>
        <CardTipoDeUsuario usuario={card4} >
          <img src={img4} alt="img4"
          className="w-[75%]"/>
        </CardTipoDeUsuario>
      </Link>
      )}

      </div>
    
      </div> 
    
    </div>
  )
}