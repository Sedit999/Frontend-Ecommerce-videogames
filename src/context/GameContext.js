import React, { createContext, useState } from "react";
import clienteAxios from "../config/axios";
export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const bringGame = async (id) => {
    let res;
    localStorage.removeItem("game");
    try {
      res = await clienteAxios.get(`/games/game/${id}`);
      localStorage.setItem("game", JSON.stringify(res.data.game));
    } catch (err) {
      console.log("bringGame falló");
      console.log(err);
    }
    return res.data.game;
  };

  const data = {
    bringGame,
  };
  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};