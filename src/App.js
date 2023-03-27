import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login.jsx";
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


function App() {
  return (
    <Routes>
      <Route path="/" element={<_Layout />}>
        <Route index element={<Nuevos />} />
        <Route path="proximos" element={<Proximos />} />
        <Route path="ofertas" element={<Ofertas />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/search/" element={<Search />}>
        <Route index element={<Trends />} />
      </Route>
      <Route path="/library/" element={<Library />}>
        <Route index element={<Bought />} />
      </Route>
      <Route path="/favorite/" element={<Favorites />}>
        <Route index element={<WishList />} />
      </Route>
    </Routes>
  );
}

export default App;
