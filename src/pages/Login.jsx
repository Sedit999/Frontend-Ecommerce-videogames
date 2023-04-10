import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Login() {
  const userCtx = useContext(UserContext);
  const { loginUser, authStatus, verifyingToken, formData } = userCtx;

  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus) {
      verifyingToken();
      navigate("/");
    }
  }, [authStatus]);

  if (authStatus) return null;

  const sendData = (event) => {
    event.preventDefault();
    loginUser(formData);
  };

  return (
    <div id="container-login">
      {" "}
      <div id="login-header">
        <div id="login-header-text" onClick={() => navigate("/")}>
          Home
        </div>
      </div>
      <div id="login">
        <h1 id="login-title">Iniciar sesión</h1>

        <form id="login-form" onSubmit={(e) => sendData(e)}>
          <FormInput typeD="email" />
          <FormInput typeD="password" />
          <button id="login-form-button" type="submit">
            Enviar
          </button>
        </form>

        <Link to="/register" id="create-account">
          Crear cuenta
        </Link>
      </div>
    </div>
  );
}

export default Login;
