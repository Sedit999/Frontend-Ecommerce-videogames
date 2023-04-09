import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Drawer } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Selecter() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const userCtx = useContext(UserContext);
  const { logout, log, user } = userCtx;

  return (
    <React.Fragment>
      <div id="bot-menu">
        <div id="select">
          <div className="select-opc">
            <div className="bars__menu margin" onClick={showDrawer}>
              <span className="line1__bars-menu"></span>
              <span className="line2__bars-menu"></span>
              <span className="line3__bars-menu"></span>
            </div>
          </div>
          <div className="select-opc">
            <Link to="/favorite/">
              <div id="fav" className="select-option">
                <HeartFilled />
              </div>
            </Link>
          </div>
          <div className="select-opc" id="home">
            <Link to="/">
              <span className="select-option">
                <HomeOutlined />
              </span>
            </Link>
          </div>
          <div className="select-opc">
            <Link to="/cart">
              <span className="select-option" id="cart">
                <ShoppingCartOutlined />
              </span>
            </Link>
          </div>
          <div className="select-opc">
            <Link to="/search/">
              <span className="select-option" id="cart">
                <SearchOutlined />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Drawer
        title={user.username !== null ? `Hola, ${user.username}` : "Opciones"}
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        key="bottom"
      >
        <Link>
          <p id="drawer-opc1" className="drawer-opcs">
            Métodos de pago
          </p>
          <hr />
        </Link>
        <Link>
          <p className="drawer-subs-opcs drawer-opcs">
            Historial de transacciones
          </p>
          <hr />
        </Link>
        {log ? (
          <Link to="/">
            <p
              className="drawer-subs-opcs drawer-opcs"
              onClick={() => logout() && onClose}
            >
              {" "}
              Cerrar sesión{" "}
            </p>
            <hr />
          </Link>
        ) : (
          <Link to="/login">
            <p className="drawer-subs-opcs drawer-opcs"> Iniciar sesión </p>
            <hr />
          </Link>
        )}
      </Drawer>
    </React.Fragment>
  );
}

export default Selecter;
