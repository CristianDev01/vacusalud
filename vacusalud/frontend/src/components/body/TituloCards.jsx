
const titulos = {

  paginaInicio: [
    "¡Puedes aprender desde cualquier lugar!", 
    "Programas", 
    "Generalidades del sistema de salud y la EPS"],

  paginaHospitales: [
    "Centro de Excelencia en Salud y Educación en Popayán", 
    "Centro de Referencia en Alta Complejidad del Suroccidente Colombiano",
    "Centro de Excelencia Médica y Docente en Bogotá"],

  paginaClinicas: [
    "Liderazgo en Atención Médica Integral en Cali", 
    "Excelencia en Servicios de Salud en Bogotá",
    "Calidez y Profesionalismo en la Atención de Salud en Medellín"],
    
  paginaCentrosDeSalud: [
    "Cuidado Integral para la Comunidad Vallecaucana", 
    "Atención de Calidad y Accesibilidad en el Norte de Bogotá",
    "Salud Preventiva y Atención Primaria en Medellín"],
    
  paginaIps: [
    "Líder en Atención Médica Especializada en Cali", 
    "Salud Integral y Multidisciplinaria en Bogotá",
    "Compromiso con la Salud Comunitaria en Bogotá"],
    
  paginaLaboratorios: [
    "Excelencia en Diagnóstico en Medellín", 
    "Líder en Servicios de Laboratorio en Bogotá",
    "Calidad y Precisión en Diagnósticos en Cali"],    
    
};

export const obtenerTitulo = (tituloKey, index) => titulos[tituloKey][index];