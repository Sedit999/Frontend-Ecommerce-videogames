import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Selecter from "./Selecter";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <Outlet />
      <Selecter />
    </React.Fragment>
  );
}

export default Layout;
