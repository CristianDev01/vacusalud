import axios from "axios";

const iniciarAdmin = async(data) => { 
  const url = 'http://localhost:8000/accounts/login-admin/';
  
  try {
    const response = await axios.post(url, data);
    localStorage.setItem('access', response.data.access);
    
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

export default iniciarAdmin