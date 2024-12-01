import { Header } from "../header/Header";
import { NavBar } from "../header/NavBar";
import { MyCarousel } from "../body/Carousel";
import { SectionsCard } from "../body/SectionsCard";
import { Footer } from "../footer/Footer";

export function Inicio() {
  return (
    <>
    
    <Header
      buttonColor={"bg-cyan-800"}
      loginText={"text-neutral-100"}
      linksColor={"text-cyan-800"}
      menuColorBtn={"text-cyan-800"}
      menuColorBg={"bg-cyan-800"}
      menuLoginBg={"bg-white"}
      menuTextColor={"text-cyan-800"}
      linksVisibles
      loginVisible
      botonVisible >
    </Header>

    <NavBar
      barColor={"bg-cyan-800"}
      linksVisibles >
    </NavBar>

    <MyCarousel
      carouselKey={"paginaInicio"}
      carouselStyle
      lineColor={"border-cyan-800"}
      noticeColor={"text-cyan-800"}
      noticeVisible >
    </MyCarousel>

    <SectionsCard 
      BgColor={"bg-cyan-800"}
      tituloSectionKey={"paginaInicio"}
      svgKey={"paginaInicio"}
      imgKey={"paginaInicio"}
      tituloKey={"paginaInicio"}
      parrafoKey={"paginaInicio"}
      irColor={"text-cyan-800"}
      arrowColor={"#00616E"}
      irKey={"paginaInicio"}
      noticeMargin >
    </SectionsCard>

    <Footer />
      
    </>
  )
}