import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"
import { MyCarousel } from "../body/Carousel"
import { SectionsCard } from "../body/SectionsCard"
import { Footer } from "../footer/Footer"


export function Clinicas() {
  return (
    <>
    
    <Header
      buttonColor={"bg-emerald-900"}
      loginText={"text-neutral-100"}
      linksColor={"text-emerald-900"}
      menuColorBtn={"text-emerald-900"} menuColorBg={"bg-emerald-900"}
      menuLoginBg={"bg-white"} menuTextColor={"text-emerald-900"}
      linksVisibles
      loginVisible
      botonVisible >
    </Header>

    <NavBar
      barColor={"bg-emerald-900"}
      linksVisibles >
    </NavBar>

    <MyCarousel
      carouselKey={"paginaClinicas"}
    />
    
    <SectionsCard
      BgColor={"bg-emerald-900"}
      tituloSectionKey={"paginaClinicas"}
      svgKey={"paginaClinicas"}
      tituloKey={"paginaClinicas"}
      parrafoKey={"paginaClinicas"}
      irKey={"paginaClinicas"}
      irColor={"text-emerald-900"}
      arrowColor={"#064e3b"}
      imgKey={"paginaClinicas"} >
    </SectionsCard>

    <Footer />
    
    </>
  )
}