import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

const RutasPublicas = ({ children }) => {
  const token = localStorage.getItem("access");

  if (token) {
    try {
      // Decodifica el token
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      // Verifica si el token ha expirado
      if (decodedToken.exp > currentTime) {
        // Redirige según el rol del usuario
        switch (decodedToken.tipos_usuario) {
          case "admin":
            return <Navigate to="/dashboard-administrador" />;
          case "empresa":
            return <Navigate to="/dashboard-empresa" />;
          case "persona":
            return <Navigate to="/dashboard-persona" />;
          default:
            return <Navigate to="/" />;
        }
      }
    } catch (error) {
      console.error("Error al decodificar el token:", error);
    }
  }

  // Si no hay token válido, permite acceso a rutas públicas
  return children;
};

export default RutasPublicas;