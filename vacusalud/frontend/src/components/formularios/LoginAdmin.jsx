import { TemplateFormulario } from "../body/TemplateFormulario";
import Inputs from "../body/Inputs"
import InputPassword from "../body/InputPassword";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import iniciarAdmin from "../autenticacion/AdminLogin";
import { toast } from "sonner";

export function LoginAdmin() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {

    const response = await iniciarAdmin(data)
      if (!response.success) {
        toast.error(response.message.error || response.message)
        return 
      } 
      navigate('/dashboard-administrador')
  })



  return(

    <form onSubmit={onSubmit} >

      <TemplateFormulario 
      
        label={"Administrador"}
        nameBotton={"Iniciar sesión"}
        colorBoton={"bg-cyan-800"}
        colorTextBoton={"text-neutral-100"} >

        <Inputs {...register('email', {required:true})} 
          type={"email"}
          name={'email'}
          placeholder={'Correo eletrónico'}
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