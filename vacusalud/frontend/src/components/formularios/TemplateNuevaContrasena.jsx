import { TemplateFormulario } from "../body/TemplateFormulario"
import InputPassword from "../body/InputPassword"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"

export function TemplateNuevaContrasena() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const { uidb64, token } = useParams()

  const onSubmit = handleSubmit(async (data) => {
    const url = `http://127.0.0.1:8000/accounts/contrasena-nueva/${uidb64}/${token}/`;
    
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      toast.success(response.data.message)
      navigate("/iniciar-sesion-tipo-de-usuario")

      return response.data 

    } catch (error) {

      if (error.response) {
        toast.error(error.response.data.error || 'Error al obtener datos.');

      } else {
        toast.error('Vuelve a intentarlo mas tarde.');
        navigate('/')
      }

    }
  }
  )

  return(
    
    <form onSubmit={onSubmit}>

      <TemplateFormulario 

        label={"Contraseña nueva"}
        nameBotton={"Guardar"}
        colorBoton={"bg-cyan-800"}
        colorTextBoton={"text-neutral-100"} >
        
        <InputPassword {...register('password', {required:true})}
          type={"password"}
          name={"password"}
          placeholder={'Ingresa una contraseña nueva'}
          required
          autoComplete="off"
        />

      </TemplateFormulario>

    </form>

  )
}