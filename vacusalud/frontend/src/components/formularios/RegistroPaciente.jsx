import { TemplateFormulario } from "../body/TemplateFormulario";
import Inputs from "../body/Inputs";
import InputSelect from "../body/InputSelect"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import registroPacienteEmpresa from "../autenticacion/RegistroPacienteEmpresa";
import { toast } from "sonner";

export function RegistroPaciente() {

  const {register, handleSubmit, watch} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {

    const response = await registroPacienteEmpresa(data)
      if (!response.success) {
        toast.error(response.message.response || response.message)
        return 
      } 
      toast.success("Paciente registrado éxitosamente.")
      navigate('/')
  })

  const inputRangoEdad = watch("rangos_edad");
  const departamento = watch("departamento");

  return(

    <form onSubmit={onSubmit} className="pt-32" >
      
      <TemplateFormulario

        label={"Datos paciente"}
        nameBotton={"Registrar"}
        colorBoton={"bg-emerald-900"}
        colorTextBoton={"text-neutral-100"} >

        
        
        <InputSelect {...register('tipos_documento', {required:true})} 
          name={"tipos_documento"}
          required 
          >
          <option value="">Tipo de documento</option>
          <option className="font-medium" value="CC">Cédula de ciudadanía</option>
          <option className="font-medium" value="CE">Cédula de extranjería</option>
          <option className="font-medium" value="TI">Tarjeta de identidad</option>
          <option className="font-medium" value="RC">Registro civil</option>
        </InputSelect>
          
        <Inputs {...register('numero_identificacion', {required:true})} 
          type={"number"}
          name={'numero_identificacion'}
          placeholder={'Número de identificación'}
          required
          autoComplete="off"
        />

        <Inputs {...register('nombre_persona', {required:true})} 
          type={"text"}
          name={'nombre_persona'}
          placeholder={'Nombre completo'}
          required
          autoComplete="off"
        />

          
        <label className="grid text-neutral-900/80 text-[10px] previo-sm:text-[14px]">Fecha de nacimiento
          <Inputs {...register('fecha_nacimiento', {required:true})} 
            type={"date"}
            name={'fecha_nacimiento'}
            required
            autoComplete="off"
          />
        </label>

        <InputSelect {...register('rangos_edad', {required:true})} 
          name={"rangos_edad"}
          required 
          >
          <option value="" >Rango de edad</option>
          <option className="font-medium" value="Mayor">Mayor de edad</option>
          <option className="font-medium" value="Menor">Menor de edad</option>
        </InputSelect>

        <InputSelect {...register('genero_persona', {required:true})} 
          name={"genero_persona"}
          required 
          >
          <option value="" >Género</option>
          <option className="font-medium" value="Masculino">Masculino</option>
          <option className="font-medium" value="Femenino">Femenino</option>
          <option className="font-medium" value="Otro">Otro</option>
        </InputSelect>

        <InputSelect {...register('departamento', {required:true})} 
          name={"departamento"}
          required 
          >
          <option value="" >Departamento</option>
          <option className="font-medium" value="Antioquia">Antioquia</option>
          <option className="font-medium" value="Atlántico">Atlántico</option>
          <option className="font-medium" value="Bolívar">Bolívar</option>
          <option className="font-medium" value="Cundinamarca">Cundinamarca</option>
          <option className="font-medium" value="Magdalena">Magdalena</option>
          <option className="font-medium" value="Santander">Santander</option>
          <option className="font-medium" value="Valle del Cauca">Valle del Cauca</option>
          
        </InputSelect>

        <InputSelect {...register('municipio', {required:true})} 
          name={"municipio"}
          required 
          >
          <option value="" >Municipio</option>

          {departamento === "Antioquia" && (
          <option className="font-medium" value="Medellín">Medellín</option>
          )}

          {departamento === "Atlántico" && (
          <option className="font-medium" value="Barranquilla">Barranquilla</option>
          )}

          {departamento === "Bolívar" && (
          <option className="font-medium" value="Cartagena">Cartagena</option>
          )}

          {departamento === "Cundinamarca" && (
          <option className="font-medium" value="Bogotá">Bogotá</option>
          )}

          {departamento === "Magdalena" && (
          <option className="font-medium" value="Santa Marta">Santa Marta</option>
          )}

          {departamento === "Santander" && (
          <option className="font-medium" value="Bucaramanga">Bucaramanga</option>
          )}

          {departamento === "Valle del Cauca" && (
          <option className="font-medium" value="Cali">Cali</option>
          )}
        </InputSelect>

        <Inputs {...register('direccion', {required:true})} 
          type={"text"}
          name={'direccion'}
          placeholder={'Dirección de residencia'}
          required
          autoComplete="off"
        />

        {inputRangoEdad !== "Menor" && (
        <Inputs {...register('telefono', {required:true})} 
          type={"number"}
          name={'telefono'}
          placeholder={'Teléfono'}
          required
          autoComplete="off"
        />
        )}

        <Inputs {...register('username', {required:true})} 
          type={"text"}
          name={'username'}
          placeholder={'Nombre de usuario'}
          required
          autoComplete="off"
        />

        <Inputs {...register('email', {required:true})} 
          type={"email"}
          name={'email'}
          placeholder={'Correo electrónico'}
          required
          autoComplete="off"
        />

        {inputRangoEdad === "Menor" && (
        <>

        <label className="grid text-neutral-900/80 text-[11px] previo-sm:text-[15px]"> Ingresa al acudiente
          <InputSelect {...register('tipos_acudiente', {required:true})} 
            name={"tipos_acudiente"}
            required 
            >
            <option value="">Parentesco</option>
            <option className="font-medium" value="madre">Madre</option>
            <option className="font-medium" value="padre">Padre</option>
            <option className="font-medium" value="familiar">Familiar</option>
          </InputSelect>
        </label>

        <Inputs {...register('numero_identificacion_acudiente', {required:true})} 
          type={"number"}
          name={'numero_identificacion_acudiente'}
          placeholder={'Número identificación del acudiente'}
          required
          autoComplete="off"
        />

        <Inputs {...register('nombre_acudiente', {required:true})} 
          type={"text"}
          name={'nombre_acudiente'}
          placeholder={'Nombre de acudiente'}
          required
          autoComplete="off"
        />

        <Inputs {...register('telefono_acudiente', {required:true})} 
          type={"number"}
          name={'telefono_acudiente'}
          placeholder={'Teléfono'}
          required
          autoComplete="off"
        />

        </>
        )}

      </TemplateFormulario>
    </form>

  )
}