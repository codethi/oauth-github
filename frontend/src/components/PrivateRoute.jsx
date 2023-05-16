import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export function PrivateRoute({ children, redirectTo }) {
  // Retorna o valor do cookie com nome "token"
  const token = Cookies.get("token");
  const isAuthenticated = token !== "";
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
