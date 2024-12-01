import { Dashboard } from "../body/Dashboard";
import { Header } from "../header/Header";
import {Footer} from "../footer/Footer"
import axios from "axios";
import { useState, useEffect } from "react";

export function DashboardAdmin() {

  const [nombre, setNombre] = useState([]);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const nombreUsuario = async () => {
      const url = 'http://127.0.0.1:8000/dashboard/administrador';
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
    colorLogout={"bg-indigo-900"}
    />

    <Dashboard
      option1
      option2
      option3
      option4
      titulo={`¡Bienvenido ${nombre}!`}
      subTitulo1={"Aquí podrás"}
      subTitulo2={"registrar empresas, configurar opciones y supervisar"}
      subTitulo3={"toda la plataforma de manera eficiente."}
      imgDashboard={"/src/assets/dashboard/admin/dashboard.webp"}
      colorDashboard={"bg-indigo-900"}
      colorDashboard2={"bg-indigo-900/80"}

      img1={"/src/assets/dashboard/admin/registrar_empresa.png"}
      img2={"/src/assets/dashboard/admin/ver_editar.png"}
      img3={"/src/assets/dashboard/admin/admin_avanzado.png"}
      img4={"/src/assets/dashboard/admin/credenciales.png"}
      card1={"Registrar empresa"}
      card2={"Ver o editar empresa"}
      card3={"Panel avanzado"}
      card4={"Crendenciales"}
      
      to1={"/registro-empresas-admin"}
      to2={"/ver-editar-empresa"}
      to3={"http://127.0.0.1:8000/admin"}
      to4={"http://127.0.0.1:8000/admin/autenticacion/"}>
    </Dashboard>

    <Footer/>

    </>
  )
}