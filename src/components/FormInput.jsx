import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function FormInput({ typeD }) {
  const { handleChange } = useContext(UserContext);
  const options = {
    username: { title: "Nombre de usuario", type: "text" },
    email: { title: "Dirección de email", type: "mail" },
    password: { title: "Contraseña", type: "password" },
  };
  return (
    <>
      <input
        className="login-form-input"
        id={typeD}
        name={typeD}
        type={options[typeD].type}
        required
        placeholder={options[typeD].title}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}

export default FormInput;
