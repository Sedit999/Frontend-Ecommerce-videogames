import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <React.Fragment>
      <div id="menu">
        <ul id="menu-list">
          <li className="menu-opc">
            <div className="container1">
              <Link to="/">
                <span id="menu-opc1">Nuevos</span>
              </Link>
            </div>
          </li>
          <li className="menu-opc">
            <div className="container2">
              <Link to="proximos">
                <span id="menu-opc2">Proximos</span>
              </Link>
            </div>
          </li>
          <li className="menu-opc">
            <div className="container3">
              <Link to="ofertas">
                <span id="menu-opc3">Ofertas</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Menu;
