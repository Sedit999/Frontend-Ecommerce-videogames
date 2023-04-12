import React, { createContext } from "react";
import clienteAxios from "../config/axios";
export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const backend = "https://backend-ecommerce-videogames.onrender.com";
  const bringGame = async (id) => {
    let res;
    localStorage.removeItem("game");
    try {
      res = await clienteAxios.get(`${backend}/games/game/${id}`);
      localStorage.setItem("game", JSON.stringify(res.data.game));
      return res.data.game;
    } catch (err) {
      console.log("bringGame falló");
      console.log(err);
    }
  };

  const data = {
    bringGame,
  };
  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};
