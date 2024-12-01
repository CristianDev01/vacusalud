import { Header } from "../header/Header"
import { NavBar } from "../header/NavBar"
import { MyCarousel } from "../body/Carousel"
import { SectionsCard } from "../body/SectionsCard"
import { Footer } from "../footer/Footer"

export function Hospitales() {

  return (
    <>
    
    <Header
      buttonColor={"bg-rose-900"}
      loginText={"text-neutral-100"}
      linksColor={"text-rose-900"}
      menuColorBtn={"text-rose-900"}
      menuColorBg={"bg-rose-900"}
      menuLoginBg={"bg-white"}
      menuTextColor={"text-rose-900"}
      linksVisibles
      loginVisible
      botonVisible >
    </Header>

    <NavBar
      barColor={"bg-rose-900"}
      linksVisibles >
    </NavBar>

    <MyCarousel
      carouselKey={"paginaHospitales"}
    />

    <SectionsCard
      BgColor={"bg-rose-900"}
      tituloSectionKey={"paginaHospitales"}
      svgKey={"paginaHospitales"}
      imgKey={"paginaHospitales"}
      tituloKey={"paginaHospitales"}
      parrafoKey={"paginaHospitales"}
      irKey={"paginaHospitales"}
      arrowColor={"#881337"}
      irColor={"text-rose-900"}>
    </SectionsCard>

    <Footer />

    </>
  )
}