import { TemplateFormulario } from "../body/TemplateFormulario"
import Inputs from "../body/Inputs"
import InputPassword from "../body/InputPassword"
import InputSelect from "../body/InputSelect"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import iniciarPersona from "../autenticacion/PersonaLogin"
import { toast } from "sonner"

export function LoginPersona() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {

    const response = await iniciarPersona(data)
      if (!response.success) {
        toast.error(response.message.error || response.message)
        return 
      } 
      navigate('/dashboard-persona')
  })

  return(
    
    <form onSubmit={onSubmit} >

      <TemplateFormulario

        label={"Persona"}
        nameBotton={"Iniciar sesión"}
        colorBoton={"bg-cyan-800"}
        colorTextBoton={"text-neutral-100"}
        restablecerContrasena={"/restablecer-contrasena-persona"}
        renderRestablecer >
        
        <InputSelect {...register('tipos_documento', {required:true})} 
          name={"tipos_documento"}
          required 
          >
          <option value="">Seleccione su documento</option>
          <option className="font-medium" value="CC">Cédula de ciudadanía</option>
          <option className="font-medium" value="CE">Cédula de extranjería</option>
          <option className="font-medium" value="TI">Tarjeta de identidad</option>
          <option className="font-medium" value="RC">Registro civil</option>
        </InputSelect>

        <Inputs {...register('numero_identificacion', {required:true})} 
          type={"tel"}
          name={'numero_identificacion'}
          placeholder={'Número de identificación'}
          required
          autoComplete="current-tel"
        />
        
        <InputPassword {...register('password', {required:true})}
          type={"password"}
          name={"password"}
          placeholder={'Contraseña'}
          required
          autoComplete="off"
        />

      </TemplateFormulario>

    </form>

  )
}