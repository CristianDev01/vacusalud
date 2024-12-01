import axios from "axios";

const registroEmpresa = async(data) => {
  const url = "http://localhost:8000/accounts/registro-empresa/"

  try {
    const response = await axios.post(url, data)

    return { 
      success: true,
      data: response.data 
    }

  } catch (error) {
    return {
      success: false,
      message: error.response ? error.response.data.error : error.message
    }
  }
}

export default registroEmpresa