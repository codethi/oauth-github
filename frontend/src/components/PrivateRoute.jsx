import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, redirectTo }) {
  const isAuthenticated = localStorage.getItem("token") !== null;
  //console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
