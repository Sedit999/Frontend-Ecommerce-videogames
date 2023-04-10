import React from "react";
import PaypalBtn from "../components/PaypalBtn";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

function CartMenu() {
  let subTotal = [];
  const navigate = useNavigate();
  let cartList = JSON.parse(localStorage.getItem("cartList"));
  if (!cartList) {
    localStorage.setItem("cartList", JSON.stringify([]));
  }

  cartList.forEach((cartGame) => {
    subTotal.push(cartGame.gameToLS.price);
  });

  const valueSubTotal = subTotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  function deletGame(idGame) {
    let cartList = JSON.parse(localStorage.getItem("cartList"));
    for (let i = 0; i <= cartList.length - 1; i++) {
      if (cartList[i].id == idGame) {
        cartList.splice(i, 1);
      }
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));

    navigate("/cart");
  }

  if (cartList === []) {
    return <h1>Carrito Vacío</h1>;
  } else {
    return (
      <>
        <>
          {cartList && subTotal && (
            <>
              <div id="cart-header">
                <div id="cart-header-text" onClick={() => navigate("/")}>
                  Home
                </div>
              </div>
              <div id="buy-container">
                <h2>Confirmar Compra</h2>

                <div id="buy-costs">
                  <div className="buy-costs">
                    <div>Subtotal</div>
                    <div>US${valueSubTotal.toFixed(2)}</div>
                  </div>

                  <div className="buy-costs">
                    <div>Impuestos</div>
                    <div>US${(valueSubTotal * 0.16).toFixed(2)}</div>
                  </div>

                  <div className="buy-costs" id="buy-total">
                    <div>Total</div>
                    <div>US${(valueSubTotal * 1.16).toFixed(2)}</div>
                  </div>
                </div>
                <h4>Método De Pago</h4>
                <div id="buy-pay">
                  <div id="buy-paypal">
                    <PaypalBtn
                      value={`${(valueSubTotal * 1.16).toFixed(2).toString()}`}
                    />
                  </div>
                </div>
                <h4>Resumen</h4>
                {cartList.map((cartGame) => {
                  return (
                    <div id="buy-game-info">
                      <div id="buy-game-img">
                        <img
                          id="buy-game-img"
                          src={cartGame.gameToLS.img}
                          alt="game-img"
                        />
                      </div>
                      <div id="buy-game">
                        <div>{cartGame.gameToLS.name}</div>
                        <div>{cartGame.gameToLS.pricetxt}</div>
                        <div>{cartGame.gameToLS.esrbrating}</div>
                        <div>{cartGame.gameToLS.releasedate}</div>
                      </div>
                      <DeleteOutlined onClick={() => deletGame(cartGame.id)} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      </>
    );
  }
}

export default CartMenu;
