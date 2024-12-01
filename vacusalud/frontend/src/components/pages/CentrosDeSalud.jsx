import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"
import { MyCarousel } from "../body/Carousel"
import { SectionsCard } from "../body/SectionsCard"
import { Footer } from "../footer/Footer"

export function CentrosDeSalud() {
  return (
    <>
    
    <Header
      buttonColor={"bg-stone-700"}
      loginText={"text-neutral-100"}
      linksColor={"text-stone-700"}
      menuColorBtn={"text-stone-700"}
      menuColorBg={"bg-stone-700"}
      menuLoginBg={"bg-white"}
      menuTextColor={"text-stone-700"}
      linksVisibles
      loginVisible
      botonVisible >
    </Header>

    <NavBar
      barColor={"bg-stone-700"}
      linksVisibles >
    </NavBar>

    <MyCarousel
      carouselKey={"paginaCentrosDeSalud"}
    />
    
    <SectionsCard
      BgColor={"bg-stone-700"}
      tituloSectionKey={"paginaCentrosDeSalud"}
      svgKey={"paginaCentrosDeSalud"}
      imgKey={"paginaCentrosDeSalud"}
      tituloKey={"paginaCentrosDeSalud"}
      irKey={"paginaCentrosDeSalud"}
      parrafoKey={"paginaCentrosDeSalud"}
      irColor={"text-stone-700"}
      arrowColor={"#44403c"}  >
    </SectionsCard>

    <Footer />
    
    </>
  )
}