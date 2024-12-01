import { TemplateFormulario } from "../body/TemplateFormulario"
import Inputs from "../body/Inputs"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import restablecerContrasenaPersona from "../autenticacion/RestablecerContrasenaPersona"
import { toast } from "sonner"

export function PersonaRestablecer() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {

    const response = await restablecerContrasenaPersona(data)
      if (!response.success) {
        toast.error(response.message.error || response.message)
        return 
      } 
      toast.success(response.data.message)
      navigate('/iniciar-sesion-persona')
  })

  return(
    
    <form onSubmit={onSubmit}>

      <TemplateFormulario 

        label={"Persona"}
        nameBotton={"Restablecer contraseña"}
        colorBoton={"bg-cyan-800"}
        colorTextBoton={"text-neutral-100"} >

        <Inputs {...register('username', {required:true})}
          type={"text"}
          name={'username'}
          placeholder={"Ingresa tu usuario"}
          required
          autoComplete="off"
        />
        
        <Inputs {...register('email', {required:true})}
          type={"email"}
          name={"email"}
          placeholder={'Ingresa el correo electrónico'}
          required
          autoComplete="off"
        />

      </TemplateFormulario>

    </form>

  )
}