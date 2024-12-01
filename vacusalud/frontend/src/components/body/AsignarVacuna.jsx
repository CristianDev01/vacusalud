import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import Inputs from "./Inputs"
import InputSelect from "./InputSelect"
import { BotonLogin } from "../header/BotonLogin"
import axios from "axios"
import asignarVacunaEmpresa from "../autenticacion/AsignarVacunaEmpresa"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function AsignarVacuna() {

  const {register, handleSubmit, setValue, watch} = useForm();
  const [paciente, setPaciente] = useState([]);
  const [vacuna, setVacuna] = useState([]);
  const navigate = useNavigate()

  const buscarPaciente = async(numero_identificacion) => {
    const url = `http://127.0.0.1:8000/busqueda/pacientes/?search=${numero_identificacion}`;
    const token = localStorage.getItem('access')

    if (numero_identificacion.trim() === "") {
      setPaciente([]); // Si no hay número de identificación, vacía la lista de pacientes.
      return;
    }

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const pacientesFiltrados = response.data.filter(persona => 
        persona.numero_identificacion === numero_identificacion
      );

      setPaciente(pacientesFiltrados)
    
    } catch (error) {

      setPaciente([])
      console.error("Error al obtener pacientes:", error);

    } 
  };

  const seleccionarPaciente = (persona) => {
    setValue("numero_identificacion", persona.numero_identificacion);
    setValue("nombre_persona", persona.nombre_persona);
    setValue("fecha_nacimiento", persona.fecha_nacimiento);
    setValue("rangos_edad", persona.rangos_edad);
    setValue("genero_persona", persona.genero_persona);
    setValue("departamento", persona.departamento);
    setValue("municipio", persona.municipio);
    setValue("persona_id", persona.id)
    setValue("empresa_id", persona.empresa_id)
    setPaciente([]);
  };

  useEffect(() => {
    const obtenerEnfermedad = async() => {
      const url = 'http://127.0.0.1:8000/busqueda/vacunas/';
      
        try {
          const response = await axios.get(url);
  
          setVacuna(response.data)
          
        } catch (error) {
          console.error("Error al obtener las vacunas:", error);
      }
    };

    obtenerEnfermedad();
  }, []);

  const seleccionarEnfermedad = (id) => {
    if (id === "") {
      setValue("vacuna", "")

    } else {
      const enfermedadSeleccionada = vacuna.find(enfermedad => enfermedad.id === parseInt(id));
      setValue("vacuna", enfermedadSeleccionada.vacuna) 
      setValue("via_sitio_aplicacion", enfermedadSeleccionada.via_sitio_aplicacion)
      setValue("refuerzos", enfermedadSeleccionada.refuerzos)
    }
  };

  const onSubmit = handleSubmit(async (data) => {

    const datos = {
      persona_id: data.persona_id,
      empresa_id: data.empresa_id,
      vacuna_id: data.enfermedad,
      numero_dosis_aplicada: data.numero_dosis_aplicada,
      siguiente_dosis: data.siguiente_dosis,
      fecha_siguiente_dosis: data.fecha_siguiente_dosis ? data.fecha_siguiente_dosis : null,
      observacion: data.observacion,
    }

    const response = await asignarVacunaEmpresa(datos)
      if (!response.success) {
        toast.error(response.message.response || response.message)
        return 
      } 
      toast.success(response.data.message);
      navigate('/')
  })

  const siguiente_dosis = watch("siguiente_dosis")

  return(
    
    <div className="pt-36 pb-12 px-1">
      
      <form onSubmit={onSubmit} className="mx-auto border rounded-md border-neutral-200 shadow-md px-4 py-10 previo-sm:px-6 previo-sm:w-[465px] sm:w-[600px] sm:px-12 md:w-[750px]  ">
        
        <label className="flex justify-center pb-10 text-[20px] font-semibold previo-sm:text-[24px] text-neutral-900/80  ">
          Formulario para vacuna
        </label>
        
        <div className="grid grid-cols-2 text-[12px] font-medium gap-3 previo-sm:text-[14px] sm:gap-6  ">
        
          <label className="flex flex-col gap-2">Buscar paciente
          <Inputs {...register('numero_identificacion')} 
            type={"text"}
            name={'numero_identificacion'}
            placeholder={'Número de identificación'}
            required
            autoComplete="off"
            onChange={(e) => buscarPaciente(e.target.value)}
          />
          </label>
      
          {paciente.length > 0 && (
          <ul className="absolute w-[160px] bg-white  max-h-48 mt-[55px] previo-sm:w-[315px] ">
            {paciente.map((paciente) => (
              <li
                key={paciente.numero_identificacion}
                onClick={() => seleccionarPaciente(paciente)}
                className="px-4 py-2 cursor-pointer hover:bg-emerald-900/40 ring-1 ring-neutral-300 rounded-sm  outline-none ">
                {paciente.nombre_persona} 
              </li>
            ))}
          </ul>
          )}

          <label className="flex flex-col gap-2">Nombre del paciente
            <Inputs {...register('nombre_persona', {required:true})} 
                type={"text"}
                name={'nombre_persona'}
                required
                autoComplete="off"
                disabled
            />
          </label>

          <label className="flex flex-col gap-2">Fecha de nacimiento
            <Inputs {...register('fecha_nacimiento', {required:true})} 
                type={"text"}
                name={'fecha_nacimiento'}
                required
                autoComplete="off"
                disabled
            />
          </label>

          <label className="flex flex-col gap-2">Rango de edad
            <Inputs {...register('rangos_edad', {required:true})} 
                type={"text"}
                name={'rangos_edad'}
                required
                autoComplete="off"
                disabled
            />
          </label>

          <label className="flex flex-col gap-2">Género
            <Inputs {...register('genero_persona', {required:true})} 
                type={"text"}
                name={'genero_persona'}
                required
                autoComplete="off"
                disabled
            />
          </label>

          <label className="flex flex-col gap-2">Departamento
            <Inputs {...register('departamento', {required:true})} 
                type={"text"}
                name={'departamento'}
                required
                autoComplete="off"
                disabled
            />
          </label>

          <label className="flex flex-col gap-2">Municipio
            <Inputs {...register('municipio', {required:true})} 
                type={"text"}
                name={'municipio'}
                required
                autoComplete="off"
                disabled
            />
          </label>

          <label className="flex flex-col gap-2">Enfermedad
            <InputSelect {...register('enfermedad', {required:true})} 
              name={"enfermedad"}
              required 
              onChange={(e) => seleccionarEnfermedad(e.target.value)}
              >
              <option value="">Tipo de enfermedad</option>
              {vacuna.map((vacuna) => (

                <option key={vacuna.id}
                  className="font-medium" 
                  value={vacuna.id}>
                  {vacuna.enfermedad}
                </option>
              ))}
            </InputSelect>
          </label>

          <label className="flex flex-col gap-2">Nombre de vacuna
            <Inputs {...register('vacuna', {required:true})} 
              type={"text"}
              name={'vacuna'}
              required
              autoComplete="off"
              disabled
            />
          </label>

          <label className="flex flex-col gap-2">Sitio de aplicación
            <Inputs {...register('via_sitio_aplicacion', {required:true})} 
              type={"text"}
              name={'via_sitio_aplicacion'}
              required
              autoComplete="off"
              disabled
            />
          </label>

          <label className="flex flex-col gap-2">Refuerzos
            <Inputs {...register('refuerzos', {required:true})} 
              type={"text"}
              name={'refuerzos'}
              required
              autoComplete="off"
              disabled
            />
          </label>

          <label className="flex flex-col gap-2">Dosis aplicadas
            <InputSelect {...register('numero_dosis_aplicada', {required:true})} 
              name={"numero_dosis_aplicada"}
              required 
              >
              <option value="" >Cantidad</option>
              <option className="font-medium" value="1">1</option>
              <option className="font-medium" value="2">2</option>
              <option className="font-medium" value="3">3</option>
              <option className="font-medium" value="4">4</option>
            </InputSelect>
          </label>
          
          <label className="flex flex-col gap-2">Siguiente dosis
            <InputSelect {...register('siguiente_dosis', {required:true})} 
              name={"siguiente_dosis"}
              required 
              >
              <option value="" >¿Tiene mas dosis?</option>
              <option className="font-medium" value="Aplica">Aplica</option>
              <option className="font-medium" value="No aplica">No Aplica</option>
            </InputSelect>
          </label>
          
          {siguiente_dosis !== "No aplica" && (
          <label className="flex flex-col gap-2">Programar fecha
            <Inputs {...register('fecha_siguiente_dosis', {required:true})} 
              type={"date"}
              name={'fecha_siguiente_dosis'}
              autoComplete="off"
              required
            />
          </label>
          )}

          <label className="col-span-2 py-4 flex flex-col gap-2">Observación
            <textarea {...register('observacion', {required:false})}
              name="observacion" 
              id="observacion"
              placeholder="Escribe una observación aquí..."
              rows="3"
              cols="40"
              className="ring-1 ring-neutral-300 outline-none rounded-md w-full p-2 text-neutral-900/75 placeholder:text-neutral-900/75">
            </textarea>
          </label>
          
          <Inputs {...register('persona_id')} 
            type={"hidden"}
            name={'persona_id'}
            autoComplete="off"
            disabled
          />

          <Inputs {...register('empresa_id')} 
            type={"hidden"}
            name={'empresa_id'}
            autoComplete="off"
            disabled
          />
    
        </div>

          <div className="flex justify-center pt-6">
            <BotonLogin color={"bg-emerald-900"} textColor={"text-neutral-100"} >
              Asignar vacuna
            </BotonLogin>
          </div>

      </form>

    </div>
  )
}