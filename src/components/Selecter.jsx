import React, { useState } from "react";
import { Drawer } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
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
          <div className="select-opc" id="search">
            <Link to="/search/">
              <span className="select-option">
                <SearchOutlined />
              </span>
            </Link>
          </div>
          <div className="select-opc">
            <Link to="/cart/">
              <span className="select-option" id="cart">
                <ShoppingCartOutlined />
              </span>
            </Link>
          </div>
          <div className="select-opc">
            <Link to="/">
              <span className="select-option" id="cart">
                <UserOutlined />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        key="bottom"
      >
        <Link>
          <p id="drawer-opc1">Métodos de pago</p>
          <hr />
        </Link>
        <Link>
          <p id="drawer-opc2">Historial de transacciones</p>
        </Link>
      </Drawer>
    </React.Fragment>
  );
}

export default Selecter;
