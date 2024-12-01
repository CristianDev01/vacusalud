import { TemplateFormulario } from "../body/TemplateFormulario"
import Inputs from "../body/Inputs"
import InputPassword from "../body/InputPassword"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import iniciarEmpresa from "../autenticacion/EmpresaLogin"
import { toast } from "sonner"

export function LoginEmpresa() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {

    const response = await iniciarEmpresa(data)
      if (!response.success) {
        toast.error(response.message.error || response.message)
        return 
      } 
      navigate('/dashboard-empresa')
  })

  return(
    
    <form onSubmit={onSubmit} >

      <TemplateFormulario 

        label={"Empresa"}
        nameBotton={"Iniciar sesión"}
        colorBoton={"bg-cyan-800"}
        colorTextBoton={"text-neutral-100"}
        restablecerContrasena={"/restablecer-contrasena-empresa"}
        renderRestablecer >

        <Inputs {...register('username', {required:true})} 
          type={"text"}
          name={'username'}
          placeholder={'Nombre de usuario'}
          required
          autoComplete="off"
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