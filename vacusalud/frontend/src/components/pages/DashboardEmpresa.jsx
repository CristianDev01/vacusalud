import { Dashboard } from "../body/Dashboard";
import { Header } from "../header/Header";
import {Footer} from "../footer/Footer"
import axios from "axios";
import { useState, useEffect } from "react";

export function DashboardEmpresa() {

  const [nombre, setNombre] = useState([]);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const nombreUsuario = async () => {
      const url = 'http://127.0.0.1:8000/dashboard/empresa';
      const token = localStorage.getItem('access');

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const [{ nombre_empresa }] = response.data;
        
        setNombre(nombre_empresa);
        setCargando(false);

      } catch (error) {
        console.error("Hubo un error:", error);
        
      } finally {
        setCargando(false);
      }
    };

    nombreUsuario();
  }, []);

  if (cargando) {
    return 
  }

  return(
    <>
    
    <Header 
    cerrarSesion
    colorLogout={"bg-emerald-900"}
    />

    <Dashboard
      option1
      option2
      option3
      option4
      titulo={`¡Bienvenido ${nombre}!`}
      subTitulo1={"Aquí podrás"}
      subTitulo2={"registrar pacientes, asignar vacunas y gestionar"}
      subTitulo3={"información de manera eficiente."}
      imgDashboard={"/src/assets/dashboard/empresa/dashboard_empresa.png"}
      colorDashboard={"bg-emerald-900"}
      colorDashboard2={"bg-emerald-900/80"}

      img1={"/src/assets/dashboard/empresa/registro_paciente.png"}
      img2={"/src/assets/dashboard/empresa/asignar_vacuna.png"}
      img3={"/src/assets/dashboard/empresa/listos.png"}
      img4={"/src/assets/dashboard/empresa/actualizar_contraseña.png"}
      card1={"Registrar paciente"}
      card2={"Asignar vacunas"}
      card3={"Pacientes vacunados"}
      card4={"Actualizar contraseña"}
      
      to1={"/registro-paciente"}
      to2={"/asignar-vacuna"}
      to3={"/pacientes-vacunados"} 
      to4={"/perfil/actualizar-contrasena-empresa"} >
    </Dashboard>

    <Footer />

    </>
  )
}