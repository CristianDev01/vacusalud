import axios from "axios";

const actualizarContrasenaEmpresa = async(data) => {
  const url = "http://localhost:8000/perfil/actualizar-contrasena/"
  const token = localStorage.getItem('access')

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return { 
      success: true,
      data: response.data 
    }

  } catch (error) {
    return {
      success: false,
      message: error.response ? error.response.data.detail || error.response.data.error : error.message
    }
  }
}

export default actualizarContrasenaEmpresa