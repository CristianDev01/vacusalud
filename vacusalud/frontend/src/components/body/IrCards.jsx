
const irCards = {

  paginaInicio: [
    "https://edusalud.co/inicio",
    "https://edusalud.co/cursos",
    "https://edusalud.co/eventos"],

  paginaHospitales: [
    "https://hospitalsanjose.gov.co/",
    "http://www.huv.gov.co/",
    "https://www.husi.org.co/inicio"],

  paginaClinicas: [
    "https://www.imbanaco.com/",
    "https://www.clinicadelcountry.com/",
    "https://clinicadelprado.com.co/"],

  paginaCentrosDeSalud: [
    "https://www.comfandi.com.co/personas/salud",
    "https://bogota.gov.co/servicios/puntos-de-atencion/salud-publica-unidad-de-servicios-de-salud-suba",
    "http://www.metrosalud.gov.co/"],

  paginaIps: [
    "https://valledellili.org/",
    "https://www.virreysolisips.com/",
    "https://www.cpo.com.co/cpo/"],

  paginaLaboratorios: [
    "https://lch.co/en/",
    "https://www.colcan.com.co/",
    "https://www.anglolab.com/"],

}

export const redireccionCards = (irKey, index) => irCards[irKey][index];