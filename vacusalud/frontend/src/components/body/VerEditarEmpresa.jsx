import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { TemplateModal } from "./TemplateModal";
import { BotonLogin } from "../header/BotonLogin";
import { InputVer } from "./InputVer";
import InputEditar from "./InputEditar";
import { EditarIcon } from "../icons/EditarIcon";
import { VerIcon } from "../icons/VerIcon";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function VerEditarEmpresa() {

  const [empresas, setEmpresas] = useState([]);
  const [datosCargados, setDatosCargados] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [verEmpresa, setVerEmpresa] = useState(null);
  const [editarEmpresa, setEditarEmpresa] = useState(null);
  const navigate = useNavigate()

  const {register, handleSubmit, setValue} = useForm()

  useEffect(() => {
    const verEmpresas = async () => {
      const url = 'http://127.0.0.1:8000/dashboard/ver-editar-empresa';
      const token = localStorage.getItem('access')
      
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEmpresas(response.data);
  
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
    
    verEmpresas();

  }, [navigate, datosCargados]);


  const onSubmit = async (data) => {
    const url = `http://127.0.0.1:8000/dashboard/ver-editar-empresa/${editarEmpresa.id}/`;
    const token = localStorage.getItem('access')
    
    try {
      const response = await axios.patch(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmpresas((actualizar) => 
        actualizar.map((empresa) => 
            empresa.id === editarEmpresa.id ? response.data : empresa
      )
    );

      setModalOpen(false);
      setEditarEmpresa(null);
      
      toast.success(`La empresa ${response.data.nombre_empresa} se actualizó correctamente.`);
      
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || 'Error al actualizar datos.');
        navigate('/')
      } else {
        toast.error('Vuelve a intentarlo mas tarde.');
        navigate('/')
      }
  }
  }

  const abrirModalVer = (empresa) => {
    setVerEmpresa(empresa);
    setModalOpen(true);
  }

  const cerrarModalVer = () => {
    setModalOpen(false);
    setVerEmpresa(null);
  }

  const abrirModalEditar = (empresa) => {
    setEditarEmpresa(empresa);
    setModalOpen(true);

    setValue('nombre_empresa', empresa.nombre_empresa);
    setValue('username', empresa.username);
    setValue('departamento', empresa.departamento);
    setValue('municipio', empresa.municipio);
    setValue('direccion', empresa.direccion);
    setValue('telefono', empresa.telefono);
    setValue('email', empresa.email);
  }

  const cerrarModalEditar = () => {
    setModalOpen(false);
    setEditarEmpresa(null);
  }
  
  return (

    <div className="relative w-full pt-36 pb-20 px-3 mx-auto sm:w-[90%] md:w-[80%] previo-lg:w-[70%] lg:w-[60%] xl:w-[50%] ">

      <div className="mb-6 text-center font-semibold leading-5 text-pretty text-gray-800
      previo-sm:my-10 previo-sm:text-[20px]">
        <h1>Listado de empresas prestadoras del servicio de vacunación</h1>
      </div>

      <table className="relative w-full table-fixed text-[11px] shadow-md previo-sm:text-[13px] sm:text-[14px]  ">
        <thead>
          <tr className="bg-indigo-900/30">
            <th className="border border-indigo-900/20 w-1/2 py-2">Empresa</th>
            <th className="border border-indigo-900/20 w-1/2 py-2">Departamento</th>
            <th className="border border-indigo-900/20 w-1/3 py-2">Municipio</th>
            <th className="border border-indigo-900/20 w-1/3 py-2">Acciones</th>
          </tr>
        </thead>

       
        <tbody>
          {empresas.map((empresa) => (
            
            <tr key={empresa.id} className="hover:bg-indigo-900/20 duration-75">

              <td className="border border-indigo-900/20 px-2 py-1.5 break-words whitespace-normal sm:py-2">
                {empresa.nombre_empresa}
              </td>

              <td className="border border-indigo-900/20 text-center py-1.5 break-words whitespace-normal sm:py-2">
                {empresa.departamento}
              </td>

              <td className="border border-indigo-900/20 text-center py-1.5 break-words whitespace-normal sm:py-2">
                {empresa.municipio}
              </td>

              <td className="border border-indigo-900/20 text-center space-x-1 py-1.5 previo-sm:space-x-2">
                <button onClick={() => abrirModalVer(empresa) }> <VerIcon /> </button>
                <button onClick={() => abrirModalEditar(empresa) }> <EditarIcon /> </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && verEmpresa && (
        <TemplateModal 
          abierto={modalOpen}
          cerrar={cerrarModalVer}
          tituloModal={"Datos de la empresa"}
          colorHeaderModal={"bg-indigo-900"}>

          <div className="py-6 px-12 text-[13px] bg-white h-[475px] shadow-lg previo-sm:text-[14px] ">
            
            <InputVer
              textVer={"Nombre de empresa: "}
              dato={verEmpresa.nombre_empresa}
            />

            <InputVer
              textVer={"Usuario: "}
              dato={verEmpresa.username}
            />

            <InputVer
              textVer={"Departamento: "}
              dato={verEmpresa.departamento}
            />

            <InputVer
              textVer={"Municipio: "}
              dato={verEmpresa.municipio}
            />

            <InputVer
              textVer={"Dirección: "}
              dato={verEmpresa.direccion}
            />

            <InputVer
              textVer={"Teléfono: "}
              dato={verEmpresa.telefono}
            />

            <InputVer
              textVer={"Correo eléctronico: "}
              dato={verEmpresa.email}
            />

          </div>
        </TemplateModal>
      )}

      {modalOpen && editarEmpresa && (
        <TemplateModal 
          abierto={modalOpen}
          cerrar={cerrarModalEditar}
          tituloModal={"Actualizar datos de empresa"}
          colorHeaderModal={"bg-indigo-900"}>

          <form onSubmit={handleSubmit(onSubmit)}
            className="grid pb-6 bg-white shadow-lg ">
            
            <div className="grid py-6 px-12 gap-3 text-[13px] previo-sm:text-[14px]">

              <InputEditar {...register('nombre_empresa')}
                texto={"Nombre de empresa"}
                name={"nombre_empresa"}
                type={"text"}
              />
              
              <InputEditar {...register('username')}
                texto={"Usuario"}
                name={"username"}
                type={"text"}
              />

              <InputEditar {...register('departamento')}
                texto={"Departamento"}
                name={"departamento"}
                type={"text"}
              />

              <InputEditar {...register('municipio')}
                texto={"Municipio"}
                name={"municipio"}
                type={"text"}
              />

              <InputEditar {...register('direccion')}
                texto={"Dirección"}
                name={"direccion"}
                type={"text"}
              />

              <InputEditar {...register('telefono')}
                texto={"Teléfono"}
                name={"telefono"}
                type={"number"}
              />

              <InputEditar {...register('email')}
                texto={"Correo eléctronico"}
                name={"email"}
                type={"email"}
              />
              
            </div>
              
              <div className="flex justify-center items-end  space-x-5 bg-slate-40 ">
                <BotonLogin onClick={cerrarModalEditar} type={"button"} color={"bg-gray-600"} textColor={"text-neutral-100"}>
                  Cancelar
                </BotonLogin>

                <BotonLogin color={"bg-indigo-900"} textColor={"text-neutral-100"}>
                  Guardar
                </BotonLogin>
              </div>

          </form>
          
        </TemplateModal>
      )}

    </div>

  );
}