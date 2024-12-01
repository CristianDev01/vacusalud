import axios from "axios";

const usuarioAdmin = async(data) => { 
  const url = 'http://localhost:8000/dashboard/administrador/';
  
  try {
    const response = await axios.get(url, data);
    localStorage.getItem('access', response.data.access);
    
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

export default usuarioAdmin