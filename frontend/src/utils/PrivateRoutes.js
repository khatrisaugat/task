import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoutes() {
  const useAuth = () => {
    const user = localStorage.getItem("token");
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  const auth = useAuth();
  //   let auth = { token: true };
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
