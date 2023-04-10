import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function PrivateRoutes() {
  const { authStatus, verifyingToken } = useContext(UserContext);
  const [used, setUsed] = useState();
  useEffect(() => {
    if (!used) {
      verifyingToken();

      setUsed(true);
    }
  }, [verifyingToken, used]);
  return authStatus ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;
