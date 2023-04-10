import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import PaypalBtn from "../components/PaypalBtn";

function Cart() {
  const navigate = useNavigate();
  const gameCtx = useContext(GameContext);
  const { bringGame } = gameCtx;
  const { gameId } = useParams();
  const [loaded, setLoaded] = useState();
  const [game, setGame] = useState();

  useEffect(() => {
    const loadGame = async () => {
      if (!loaded) {
        const auxGames = await bringGame(gameId);
        setGame(auxGames[0]);
        setLoaded(true);
      }
    };
    loadGame();
  }, [bringGame, loaded]);

  return (
    <>
      {game && (
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
                <div>{game?.pricetxt}</div>
              </div>

              <div className="buy-costs">
                <div>Impuestos</div>
                <div>US${(game?.price * 0.16).toFixed(2)}</div>
              </div>

              <div className="buy-costs" id="buy-total">
                <div>Total</div>
                <div>US${(game?.price * 1.16).toFixed(2)}</div>
              </div>
            </div>
            <h4>Método De Pago</h4>
            <div id="buy-pay">
              <div id="buy-paypal">
                <PaypalBtn
                  value={`${(game?.price * 1.16).toFixed(2).toString()}`}
                />
              </div>
            </div>

            <h4>Resumen</h4>

            <div id="buy-game-info">
              <div id="buy-game-img">
                <img id="buy-game-img" src={game?.img} alt="game-img" />
              </div>
              <div id="buy-game">
                <div>{game?.name}</div>
                <div>{game?.pricetxt}</div>
                <div>{game?.esrbrating}</div>
                <div>{game?.releasedate}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
