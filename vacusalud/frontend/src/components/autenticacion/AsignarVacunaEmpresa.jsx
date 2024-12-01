import axios from "axios";

const asignarVacunaEmpresa = async(data) => {
  const url = "http://127.0.0.1:8000/vacunacion/asignar-vacuna/"
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

export default asignarVacunaEmpresa