import React, { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

function CardGames() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [obtainedGames, setObtainedGames] = useState();
  const navigate = useNavigate();
  const backend = "https://backend-ecommerce-videogames.onrender.com";
  const getGames = async () => {
    try {
      const res = await clienteAxios.get(`${backend}/games/get`);
      setIsLoaded(true);
      setObtainedGames(res.data.games);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  const handleGame = async (gameId) => {
    navigate(`/game/${gameId}`);
  };
  useEffect(() => {
    getGames();
  }, []);

  if (error) {
    return <div>Error:{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(obtainedGames);

    return (
      <>
        {obtainedGames && (
          <div id="space-games-cards">
            {obtainedGames.map((e) => {
              return (
                <div className="games-cards" onClick={() => handleGame(e._id)}>
                  <div className="img-games-cards">
                    <img src={e.img} alt="game-img" />
                  </div>
                  <ul className="info-games-cards">
                    <li>{e.name}</li>
                    <li>{e.pricetxt}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default CardGames;
