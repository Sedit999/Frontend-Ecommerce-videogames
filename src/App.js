import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import _Layout from "./components/Layout.jsx";

import Nuevos from "./components/Nuevos.jsx";
import Proximos from "./components/Proximos.jsx";
import Ofertas from "./components/Ofertas.jsx";

import Search from "./pages/Search.jsx";
import Trends from "./components/Trends.jsx";

import Library from "./pages/Library.jsx";
import Bought from "./components/Bought.jsx";

import Favorites from "./pages/Favorites.jsx";
import WishList from "./components/WishList.jsx";
import PrivateRoutes from "./components/Auth/PrivateRoutes.jsx";

import Game from "./components/Game.jsx";
import Cart from "./pages/Cart.jsx";
import CartMenu from "./components/CartMenu.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<_Layout />}>
        <Route index element={<Nuevos />} />
        <Route path="proximos" element={<Proximos />} />
        <Route path="ofertas" element={<Ofertas />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/library/" element={<Library />}>
          <Route index element={<Bought />} />
        </Route>
        <Route path="/favorite/" element={<Favorites />}>
          <Route index element={<WishList />} />
        </Route>
        <Route path="/cart/:gameId" element={<Cart />} />
        <Route path="/cart" element={<CartMenu />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search/" element={<Search />}>
        <Route index element={<Trends />} />
      </Route>
      <Route path="/game/:gameId" element={<Game />} />
    </Routes>
  );
}

export default App;
