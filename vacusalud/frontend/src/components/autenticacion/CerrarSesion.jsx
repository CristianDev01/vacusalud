import { useNavigate } from 'react-router-dom';
import { BotonLogin } from '../header/BotonLogin';

const CerrarSesion = ({ color }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar los tokens del almacenamiento local
    localStorage.removeItem('access');

    // Redirigir al usuario a la página de inicio de sesión
    navigate('/');
  };

  return (

    <BotonLogin 
      onClick={handleLogout}
      color={color}
      textColor={"text-neutral-100"}
    >
      Cerrar sesión
    </BotonLogin>


  );
};

export default CerrarSesion;