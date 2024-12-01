import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const RutasProtegidas = ({ children, requiredRole }) => {
  const token = localStorage.getItem('access');

  if (!token) {
    // Redirige al login si no hay token
    return <Navigate to="/iniciar-sesion-tipo-de-usuario" />;
  }

  // Decodifica el token
  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.tipos_usuario;

  if (requiredRole && userRole !== requiredRole) {
    // Redirige si el rol no coincide
    return <Navigate to="/" />;
  }

  // Si todo está bien, renderiza los hijos
  return children;
};

export default RutasProtegidas;