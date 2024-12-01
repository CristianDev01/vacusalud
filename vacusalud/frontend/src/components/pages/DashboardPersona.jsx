import { Dashboard } from "../body/Dashboard";
import { Header } from "../header/Header";
import {Footer} from "../footer/Footer"
import axios from "axios";
import { useState, useEffect } from "react";

export function DashboardPersona() {

  const [nombre, setNombre] = useState([]);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const nombreUsuario = async () => {
      const url = 'http://127.0.0.1:8000/dashboard/persona';
      const token = localStorage.getItem('access');

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const [{ nombre_persona }] = response.data;
        
        setNombre(nombre_persona);
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
    colorLogout={"bg-stone-700"}
    />

    <Dashboard
      option1
      option2
      titulo={`¡Bienvenido ${nombre}!`}
      subTitulo1={"Aquí podrás"}
      subTitulo2={"hacerle siguimiento al proceso de tus vacunas"}
      subTitulo3={"y actualizar tu contraseña."}
      imgDashboard={"/src/assets/dashboard/persona/dashboard_paciente.png"}
      colorDashboard={"bg-stone-700"}
      colorDashboard2={"bg-stone-700/80"}
      cardPersona

      img1={"/src/assets/dashboard/persona/vacunas_aplicadas.png"}
      img2={"/src/assets/dashboard/persona/actualizar_contraseña.png"}
      card1={"Ver vacunas aplicadas"}
      card2={"Actualizar contraseña"}

      to1={"/vacunas-aplicadas-persona"}
      to2={"/perfil/actualizar-contrasena-persona"}>
    </Dashboard>

    <Footer />

    </>
  )
}