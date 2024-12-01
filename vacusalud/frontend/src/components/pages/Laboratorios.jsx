import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"
import { MyCarousel } from "../body/Carousel"
import { SectionsCard } from "../body/SectionsCard"
import { Footer } from "../footer/Footer"

export function Laboratorios() {
  return (
    <>
    
    <Header
      buttonColor={"bg-indigo-900"}
      loginText={"text-neutral-100"}
      linksColor={"text-indigo-900"}
      menuColorBtn={"text-indigo-900"}
      menuColorBg={"bg-indigo-900"}
      menuLoginBg={"bg-white"}
      menuTextColor={"text-indigo-900"}
      linksVisibles
      loginVisible
      botonVisible >
    </Header>

    <NavBar
      barColor={"bg-indigo-900"}
      linksVisibles >
    </NavBar>

    <MyCarousel
      carouselKey={"paginaLaboratorios"}
    />
    
    <SectionsCard
      BgColor={"bg-indigo-900"}
      tituloSectionKey={"paginaLaboratorios"}
      svgKey={"paginaLaboratorios"}
      imgKey={"paginaLaboratorios"}
      tituloKey={"paginaLaboratorios"}
      parrafoKey={"paginaLaboratorios"}
      irKey={"paginaLaboratorios"}
      irColor={"text-indigo-900"}
      arrowColor={"#312e81"} >
    </SectionsCard>

    <Footer />
    
    </>
  )
}