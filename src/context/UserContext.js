import React, { useState, createContext } from "react";
import clienteAxios from "../config/axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const backend = "https://backend-ecommerce-videogames.onrender.com";
  const [user, setUser] = useState({ username: null, email: null });
  const [authStatus, setAuthStatus] = useState(false);
  const [log, setLog] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post(`${backend}/user/post`, dataForm);
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
      setLog(true);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      clienteAxios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete clienteAxios.defaults.headers.common["x-auth-token"];
    }

    try {
      const res = token && (await clienteAxios.post(`${backend}/user/verify`));
      setUser({ username: res.data.user.username, email: res.data.user.email });
      setAuthStatus(true);
    } catch (err) {
      console.log("Error verificando token", err);
    }
  };

  const loginUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post(`${backend}/user/login`, dataForm);
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
      setLog(true);
    } catch (err) {
      alert("Usuario o contraseña incorrectos");
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("gameId");
    localStorage.removeItem("game");
    localStorage.removeItem("cartList");
    alert("Sesisón cerrada con exito");
    setUser({ username: null, email: null });
    setAuthStatus(false);
    setLog(false);
  };

  const data = {
    user,
    authStatus,
    formData,
    handleChange,
    registerUser,
    verifyingToken,
    loginUser,
    logout,
    log,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
