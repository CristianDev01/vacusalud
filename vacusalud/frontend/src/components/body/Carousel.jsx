import { useState, useEffect, useCallback } from "react"
import ArrowLeft from "../icons/ArrowLeft"
import ArrowRight from "../icons/ArrowRight"
import { imagenesCarousel } from "./ImgCarousel"

export const MyCarousel = ({ lineColor, noticeColor, noticeVisible, carouselKey, carouselStyle }) => {

  const slides = imagenesCarousel(carouselKey)

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slideAnterior = () => {
    setCurrentIndex((anterior) =>
      anterior === 0 ? slides.length - 1 : anterior - 1
    );
  };

  const slideSiguiente = useCallback(() => {
    setCurrentIndex((siguiente) =>
      siguiente === slides.length - 1 ? 0 : siguiente + 1
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(slideSiguiente, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slideSiguiente]);

  return (
    
   <div className="relative mt-[102px] overflow-hidden">
    
    <div className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

      {slides.map((slide, index) => (
        <div key={index} className="w-full flex-shrink-0 bg-neutral-900">

        <img
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`h-[220px] w-full md:h-[280px] previo-lg:h-[390px]  ${carouselStyle ? "mask-gradient": "" } select-none`}
        />

        </div>
      ))}

    </div>   

    <div className="absolute h-[220px] md:h-[280px] previo-lg:h-[390px] inset-0 flex items-center justify-between px-4">

      <button className="outline-none" onClick={slideAnterior}>
        <ArrowLeft />
      </button>

      <button className="outline-none" onClick={slideSiguiente}>
        <ArrowRight />
      </button>

    </div>

    {noticeVisible && (
    <div className="relative flex items-center justify-center min-h-[50px] 
      previo-lg:absolute previo-lg:bottom-1 previo-lg:inset-x-0">
        
      <hr className={`w-[30%] border ${lineColor} previo-lg:border-neutral-300
        previo-lg:w-[20%]`} /> 

      <h1 className={`${noticeColor} font-bold text-[16px] px-2 previo-lg:text-neutral-200`}>NOTICIAS</h1>

      <hr className={`w-[30%] border ${lineColor} previo-lg:border-neutral-300
        previo-lg:w-[20%]`} />

     </div>
     )}
  
   </div>
    
  )
}