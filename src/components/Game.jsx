import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";

function Game() {
  const navigate = useNavigate();
  const gameCtx = useContext(GameContext);

  const { bringGame } = gameCtx;
  const { gameId } = useParams();
  const [loaded, setLoaded] = useState();
  const [game, setGame] = useState();

  const handleGame = async (gameId) => {
    navigate(`/cart/${gameId}`);
  };
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
          <div id="game-main-container">
            <div id="game-main">
              <div id="game-img-container">
                <img id="game-img" src={game?.img} alt="game-img" />
              </div>
              <div id="game-main-info">
                <div>
                  <h1>{game?.name}</h1>
                  <div>{game?.publisher}</div>
                </div>
              </div>
            </div>

            <div id="game-buy">
              <p>{game?.pricetxt}</p>
              <div className="game-btns">
                <button
                  className="game-btn-buy"
                  onClick={() => handleGame(game._id)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>

            <hr />
            <div id="game-text-info"> {game?.textoInfo}</div>
            <hr />
            <div id="game-other-info-conainer">
              <div id="game-other-info-content">
                <div>Calsificación: {game?.esrbrating}</div>
                <ul id="game-info-genre">
                  {" "}
                  Género:
                  {game?.genre.map((gameGenre) => {
                    return <li>{gameGenre}</li>;
                  })}
                </ul>
                <ul id="game-info-languajes">
                  {" "}
                  Idiomas:
                  {game?.languajes.map((languaje) => {
                    return <li>{languaje}</li>;
                  })}
                </ul>
                <div>Número de jugadores: {game?.noplayer}</div>

                <div>Fecha de lanzamiento: {game?.releasedate}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Game;
