import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"
import { MyCarousel } from "../body/Carousel"
import { SectionsCard } from "../body/SectionsCard"
import { Footer } from "../footer/Footer"

export function Ips() {
  return (
    <>
    
    <Header
      buttonColor={"bg-amber-900"}
      loginText={"text-neutral-100"}
      linksColor={"text-amber-900"}
      menuColorBtn={"text-amber-900"}
      menuColorBg={"bg-amber-900"}
      menuLoginBg={"bg-white"}
      menuTextColor={"text-amber-900"}
      linksVisibles
      loginVisible
      botonVisible >
    </Header>

    <NavBar
      barColor={"bg-amber-900"}
      linksVisibles >
    </NavBar>

    <MyCarousel
      carouselKey={"paginaIps"}
    />
    
    <SectionsCard
      BgColor={"bg-amber-900"}
      tituloSectionKey={"paginaIps"}
      svgKey={"paginaIps"}
      imgKey={"paginaIps"}
      tituloKey={"paginaIps"}
      irKey={"paginaIps"}
      parrafoKey={"paginaIps"}
      irColor={"text-amber-900"}
      arrowColor={"#78350f"}  >
    </SectionsCard>

    <Footer />
    
    </>
  )
}