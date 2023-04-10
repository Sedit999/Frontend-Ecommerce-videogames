import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Register() {
  const userCtx = useContext(UserContext);
  const { registerUser, authStatus, verifyingToken, formData } = userCtx;

  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus) {
      verifyingToken();
      navigate("/");
    }
  }, [authStatus, verifyingToken, navigate]);

  if (authStatus) return null;

  const sendData = (event) => {
    event.preventDefault();
    registerUser(formData);
  };

  return (
    <div id="container-login">
      <div id="header-login"></div>
      <div id="login">
        <h1 id="login-title">Crear cuenta</h1>

        <form id="login-form" onSubmit={(e) => sendData(e)}>
          <FormInput typeD="username" />
          <FormInput typeD="email" />
          <FormInput typeD="password" />
          <button id="login-form-button" type="submit">
            Enviar
          </button>
        </form>

        <Link to="/login" id="create-account">
          ¿Ya tienes una cuenta?
        </Link>
      </div>
    </div>
  );
}

export default Register;
