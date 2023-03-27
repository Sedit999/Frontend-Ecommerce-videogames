import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Selecter from "../components/Selecter";
import { Outlet } from "react-router-dom";

function Search() {
  return (
    <React.Fragment>
      <div id="searchBox">
        <div id="searchBar">
          <SearchOutlined />
          <input type="text" placeholder="Buscar" />
        </div>
      </div>

      <Outlet />
      <Selecter />
    </React.Fragment>
  );
}

export default Search;
