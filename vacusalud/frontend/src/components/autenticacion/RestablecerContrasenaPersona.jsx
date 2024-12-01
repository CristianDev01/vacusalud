import axios from "axios";

const restablecerContrasenaPersona = async(data) => { 
  const url = 'http://localhost:8000/accounts/restablecer-persona/';
  
  try {
    const response = await axios.post(url, data);
    
    return { 
      success: true,
      data: response.data 
    }

  } catch (error) {
    return {
      success: false,
      message: error.response ? error.response.data : error.message
    }
  }
}

export default restablecerContrasenaPersona