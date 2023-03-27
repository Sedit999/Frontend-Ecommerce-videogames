import React from "react";
import Selecter from "../components/Selecter";
import { Outlet } from "react-router-dom";

function Library() {
  return (
    <React.Fragment>
      <Outlet />
      <Selecter />
    </React.Fragment>
  );
}

export default Library;
