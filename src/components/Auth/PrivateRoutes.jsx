import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function PrivateRoutes() {
  const { authStatus, verifyingToken } = useContext(UserContext);
  useEffect(() => {
    verifyingToken();
  }, []);
  return authStatus ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;
