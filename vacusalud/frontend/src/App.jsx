import { Routes, Route } from "react-router-dom";
import { Hospitales } from "./components/pages/Hospitales";
import { Inicio } from "./components/pages/Inicio";
import { Clinicas } from "./components/pages/Clinicas";
import { CentrosDeSalud } from "./components/pages/CentrosDeSalud";
import { Ips } from "./components/pages/Ips";
import { Laboratorios } from "./components/pages/Laboratorios";
import { TipoDeUsuarioLogin } from "./components/pages/TipoDeUsuarioLogin";
import { IniciarSesionAdministrador } from "./components/pages/IniciarSesionAdministrador";
import { IniciarSesionEmpresa } from "./components/pages/IniciarSesionEmpresa";
import { IniciarSesionPersona } from "./components/pages/IniciarSesionPersona";
import { RestablecerEmpresa } from "./components/pages/RestablecerEmpresa";
import { RestablecerPersona } from "./components/pages/RestablecerPersona";
import { DashboardAdmin } from "./components/pages/DashboardAdmin";
import { DashboardEmpresa } from "./components/pages/DashboardEmpresa";
import { DashboardPersona } from "./components/pages/DashboardPersona";
import { RegistroEmpresasAdmin } from "./components/pages/RegistroEmpresasAdmin";
import { VerEditarEmpresaAdmin } from "./components/pages/VerEditarEmpresa";
import { RegistroPacienteEmpresa } from "./components/pages/RegistroPacienteEmpresa";
import { AsignarVacunaEmpresa } from "./components/pages/AsignarVacunaEmpresa";
import { PacienteVacunados } from "./components/pages/PacientesVacunados";
import { NuevaContrasena } from "./components/pages/NuevaContrasena";
import { EmpresaActualizarContrasena } from "./components/pages/EmpresaActualizarContrasena";
import { PersonaActualizarContrasena } from "./components/pages/PersonaActualizarContrasena";
import { VerVacunasPersona } from "./components/pages/VerVacunasPersona";

import RutasPublicas from "./components/body/RutasPublicas";
import RutasProtegidas from "./components/body/RutasProtegidas";
import { Toaster } from "sonner";

export function App() {

  return (
    <>

    <Toaster position="top-center" className="mt-[80px]" />
    
    <Routes>
      
      <Route path="/" element={<RutasPublicas> <Inicio /> </RutasPublicas>} />
      <Route path="hospitales" element={<RutasPublicas> <Hospitales /> </RutasPublicas>} />
      <Route path="clinicas" element={<RutasPublicas> <Clinicas /> </RutasPublicas>} />
      <Route path="centros-de-salud" element={<RutasPublicas> <CentrosDeSalud /> </RutasPublicas>} />
      <Route path="ips" element={<RutasPublicas> <Ips /> </RutasPublicas>} />
      <Route path="laboratorios" element={<RutasPublicas> <Laboratorios /> </RutasPublicas>} />
      <Route path="iniciar-sesion-tipo-de-usuario" element={<RutasPublicas> <TipoDeUsuarioLogin/> </RutasPublicas>} />
      <Route path="iniciar-sesion-administrador" element={<RutasPublicas> <IniciarSesionAdministrador /> </RutasPublicas>} />
      <Route path="iniciar-sesion-empresa" element={<RutasPublicas> <IniciarSesionEmpresa/> </RutasPublicas>} />
      <Route path="iniciar-sesion-persona" element={<RutasPublicas> <IniciarSesionPersona/> </RutasPublicas>} />
      <Route path="restablecer-contrasena-empresa" element={<RutasPublicas> <RestablecerEmpresa/> </RutasPublicas>} />
      <Route path="restablecer-contrasena-persona" element={<RutasPublicas> <RestablecerPersona/> </RutasPublicas>} />
      <Route path="contrasena-nueva/:uidb64/:token" element={<RutasPublicas> <NuevaContrasena /> </RutasPublicas>} />

      <Route path="dashboard-administrador" element={<RutasProtegidas requiredRole={"admin"} ><DashboardAdmin /> </RutasProtegidas>} /> 
      <Route path="registro-empresas-admin" element={<RutasProtegidas requiredRole={"admin"}> <RegistroEmpresasAdmin/> </RutasProtegidas>} />
      <Route path="ver-editar-empresa" element={<RutasProtegidas requiredRole={"admin"}> <VerEditarEmpresaAdmin/> </RutasProtegidas>} />
      <Route path="dashboard-empresa" element={<RutasProtegidas requiredRole={"empresa"}> <DashboardEmpresa/> </RutasProtegidas>} />
      <Route path="registro-paciente" element={<RutasProtegidas requiredRole={"empresa"}> <RegistroPacienteEmpresa/> </RutasProtegidas>} />
      <Route path="asignar-vacuna" element={<RutasProtegidas requiredRole={"empresa"}> <AsignarVacunaEmpresa/> </RutasProtegidas>} />
      <Route path="pacientes-vacunados" element={<RutasProtegidas requiredRole={"empresa"}> <PacienteVacunados/> </RutasProtegidas>}/>
      <Route path="perfil/actualizar-contrasena-empresa" element={<RutasProtegidas requiredRole={"empresa"}> <EmpresaActualizarContrasena/> </RutasProtegidas>}/>
      <Route path="dashboard-persona" element={<RutasProtegidas requiredRole={"persona"}> <DashboardPersona/> </RutasProtegidas>}/>
      <Route path="vacunas-aplicadas-persona" element={<RutasProtegidas requiredRole={"persona"}> <VerVacunasPersona/> </RutasProtegidas>}/>
      <Route path="perfil/actualizar-contrasena-persona" element={<RutasProtegidas requiredRole={"persona"}> <PersonaActualizarContrasena/> </RutasProtegidas>}/>

    </Routes>

    </>
  );
}  