import { useState, useEffect } from "react";
import axios from "axios";
import { TemplateModal } from "./TemplateModal";
import { InputVer } from "./InputVer";
import { VerIcon } from "../icons/VerIcon";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function VerPacientesVacunados() {

  const [pacienteVacunado, setPacienteVacunado] = useState([]);
  const [datosCargados, setDatosCargados] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [verPaciente, setVerPaciente] = useState(null);
  const navigate= useNavigate()

  useEffect(() => {
    const verPacienteVacunado = async () => {
      const url = 'http://127.0.0.1:8000/vacunacion/pacientes-vacunados/';
      const token = localStorage.getItem('access')
      
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setPacienteVacunado(response.data);
  
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error || 'Error al obtener datos.');
          navigate('/')

        } else {
          toast.error('Vuelve a intentarlo mas tarde.');
          navigate('/')
        }
  
      } finally {
        setDatosCargados(false);
      }
    };
    
    verPacienteVacunado();

  }, [navigate, datosCargados]);

  const abrirModalVer = (paciente) => {
    setVerPaciente(paciente);
    setModalOpen(true);
  }

  const cerrarModalVer = () => {
    setModalOpen(false);
    setVerPaciente(null);
  }

  return (
    
    <div className="relative w-full pt-36 pb-20 px-3 mx-auto sm:w-[90%] md:w-[80%] previo-lg:w-[70%] lg:w-[60%] xl:w-[50%] ">

      <div className="mb-6 text-center font-semibold leading-5 text-pretty text-gray-800
      previo-sm:my-10 previo-sm:text-[20px]">
        <h1>Lista de pacientes vacunados</h1>
      </div>
      
      <table className="relative w-full table-fixed text-[11px] shadow-md previo-sm:text-[13px] sm:text-[14px]">
        <thead>
          <tr className="bg-emerald-900/30">
            <th className="border border-emerald-900/20 w-1/2 py-2">Nombre de paciente</th>
            <th className="border border-emerald-900/20 w-1/2 py-2">Vacuna aplicada</th>
            <th className="border border-emerald-900/20 w-1/2 py-2">Fecha de aplicación</th>
            <th className="border border-emerald-900/20 w-1/3 py-2 previo-sm:w-1/5">Acciones</th>
          </tr>
        </thead>

        <tbody>
          
          {pacienteVacunado.map((paciente) => (
            <tr key={paciente.id} className="hover:bg-emerald-900/20 duration-75">

              <td className="border border-emerald-900/20 px-2 py-1.5 break-words whitespace-normal sm:py-2">
                {paciente.nombre_persona}
              </td>

              <td className="border border-emerald-900/20 text-center py-1.5 break-words whitespace-normal sm:py-2">
                {paciente.vacuna}
              </td>

              <td className="border border-emerald-900/20 text-center py-1.5 break-words whitespace-normal sm:py-2">
                {paciente.fecha_aplicacion}
              </td>

              <td className="border border-emerald-900/20 text-center space-x-1 py-1.5 ">
                <button onClick={() => abrirModalVer(paciente) }> <VerIcon /> </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      
      {modalOpen && verPaciente && (
        <TemplateModal 
          abierto={modalOpen}
          cerrar={cerrarModalVer}
          tituloModal={"Información de paciente vacunado"}
          colorHeaderModal={"bg-emerald-900"}>

          <div className="py-6 px-12 text-[13px]  bg-white shadow-lg previo-sm:text-[14px] ">
            
            <InputVer
              textVer={"Número de identificación: "}
              dato={verPaciente.numero_identificacion}
            />

            <InputVer
              textVer={"Nombre de paciente: "}
              dato={verPaciente.nombre_persona}
            />

            <InputVer
              textVer={"Fecha de nacimiento: "}
              dato={verPaciente.fecha_nacimiento}
            />

            <InputVer
              textVer={"Enfermedad: "}
              dato={verPaciente.enfermedad}
            />

            <InputVer
              textVer={"Vacuna aplicada: "}
              dato={verPaciente.vacuna}
            />

            <InputVer
              textVer={"Dosis aplicada: "}
              dato={verPaciente.numero_dosis_aplicada}
            />

            <InputVer
              textVer={"Fecha de aplicación: "}
              dato={verPaciente.fecha_aplicacion}
            />

            <InputVer
              textVer={"Siguiente dosis: "}
              dato={verPaciente.siguiente_dosis}
            />

            <InputVer
              textVer={"Fecha siguiente dosis: "}
              dato={verPaciente.fecha_siguiente_dosis}
            />
         
             <InputVer
              textVer={"Observación: "}
              dato={verPaciente.observacion}
            />

          </div>
        </TemplateModal>
      )}

    </div>

  );
}