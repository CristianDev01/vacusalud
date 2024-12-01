import { TemplateFormulario } from "../body/TemplateFormulario";
import Inputs from "../body/Inputs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import registroEmpresa from "../autenticacion/RegistroEmpresa";
import { toast } from "sonner";

export function RegistroEmpresa() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {

    const response = await registroEmpresa(data)
      if (!response.success) {
        toast.error(response.message.response || response.message)
        return 
      } 
      toast.success("Empresa registrada éxitosamente.")
      navigate('/')
  })

  return(

    <form onSubmit={onSubmit} >
      <TemplateFormulario

        label={"Datos Empresa"}
        nameBotton={"Registrar"}
        colorBoton={"bg-indigo-900"}
        colorTextBoton={"text-neutral-100"} >

        <Inputs {...register('nombre_empresa', {required:true})} 
          type={"text"}
          name={'nombre_empresa'}
          placeholder={'Nombre de empresa'}
          required
          autoComplete="off"
        />

        <Inputs {...register('username', {required:true})} 
          type={"text"}
          name={'username'}
          placeholder={'Usuario'}
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

      </TemplateFormulario>
    </form>

  )
}