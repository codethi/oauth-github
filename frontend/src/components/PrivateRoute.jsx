import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";

export function PrivateRoute({ children, redirectTo }) {
  const { token } = useContext(AuthContext);
  const isAuthenticated = token !== "";
  //console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
