import { TemplateFormulario } from "../body/TemplateFormulario"
import InputPassword from "../body/InputPassword"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import actualizarContrasenaEmpresa from "../autenticacion/ActualizarContrasenaEmpresa"
import { toast } from "sonner"

export function ActualizarContrasenaEmpresa() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {

    const response = await actualizarContrasenaEmpresa(data)
      if (!response.success) {
        toast.error(response.message.error || response.message)
        return 
      } 
      toast.success(response.data.message)
      navigate('/')
  })

  return(
    
    <form onSubmit={onSubmit}>

      <TemplateFormulario 

        label={"Actualizar contraseña"}
        nameBotton={"Guardar"}
        colorBoton={"bg-emerald-900"}
        colorTextBoton={"text-neutral-100"} >

        <InputPassword {...register('password_actual', {required:true})}
          type={"password"}
          name={"password_actual"}
          placeholder={'Ingresa la contraseña actual'}
          required
          autoComplete="off"
        />
        
        <InputPassword {...register('nueva_contrasena', {required:true})}
          type={"password"}
          name={"nueva_contrasena"}
          placeholder={'Ingresa una nueva contraseña'}
          required
          autoComplete="off"
        />

      </TemplateFormulario>

    </form>

  )
}