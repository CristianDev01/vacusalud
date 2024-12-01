
const parrafo = {

  paginaInicio: [
    "Esta plataforma es virtual y te permite aprender desde tu casa, tu lugar de trabajo o la casa de tus familiares. Tienes acceso a toda la información sin tener que desplazarte.",
     
    "Tenemos cursos y contenidos pensados para cada momento de vida o salud. Vas aprender a través de videos con expertos, juegos, audios, entre otros.", 
    
    "Disponemos de lecciones y recursos diseñados para cada fase de tu vida o condición médica. Vas a descubrir mediante videos con profesionales."],

  paginaHospitales: [
    "El Hospital Universitario de Popayán es un referente en el departamento del Cauca por su compromiso con la salud y la formación de nuevos profesionales.",
     
    "El Hospital Universitario del Valle 'Evaristo García', aunque ubicado en Cali, es un referente para pacientes de todo el suroccidente colombiano, incluyendo el departamento del Cauca.", 
    
    "Es uno de los principales hospitales de Bogotá y de Colombia, conocido por su alta calidad en la atención médica y su fuerte vínculo con la Pontificia Universidad Javeriana."],
    
  paginaClinicas: [
    "La Clínica Imbanaco de Cali es reconocida a nivel nacional por su compromiso con la excelencia en la atención médica y su avanzada infraestructura.",
     
    "se ha destacado por ser pionera en diversas áreas médicas, como la aplicación de anestesia intravenosa y la instalación de los primeros equipos de resonancia magnética en Bogotá.", 
    
    "Es uno de los principales hospitales de Bogotá y de Colombia, conocido por su alta calidad en la atención médica y su fuerte vínculo con la Pontificia Universidad Javeriana."],
    
  paginaCentrosDeSalud: [
    "El Centro de Salud Comfandi El Prado es uno de los centros de salud más reconocidos en Cali, gracias a su enfoque en brindar atención médica integral a la comunidad.",
     
    "El Centro de Salud Suba, parte del Hospital de Suba, es un pilar en la atención primaria y especializada para la comunidad del norte de Bogotá.", 
    
    "El Centro de Salud San Javier, parte de la red de Metrosalud en Medellín, es un centro clave para la atención primaria y preventiva en la comuna de San Javier."],
    
  paginaIps: [
    "La Fundación Valle del Lili se destaca por su liderazgo en la atención médica especializada en el suroccidente colombiano.",
     
    "La Virrey Solís IPS en Bogotá es conocida por su enfoque integral en la atención a los pacientes, ofreciendo una variedad de servicios médicos.", 
    
    "El Centro Policlínico del Olaya es una IPS que ha ganado reconocimiento por su compromiso con la salud de la comunidad en Bogotá."],
    
  paginaLaboratorios: [
    "El Laboratorio Clínico Hematológico de Antioquia es un centro de referencia en Medellín, conocido por su excelencia en el diagnóstico y análisis clínico.",
     
    "Es uno de los laboratorios más destacados en Bogotá, ofreciendo servicios integrales de diagnóstico que incluyen pruebas clínicas y moleculares..", 
    
    "Es un referente en la ciudad de Cali, conocido por su compromiso con la calidad y la precisión en los diagnósticos médicos."],    
}

export const obtenerParrafo = (parrafoKey, index) => parrafo[parrafoKey][index];