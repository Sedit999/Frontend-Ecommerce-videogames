import React, { useState, useEffect } from "react";

function Nuevos() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("empezamos");
    console.log(process.env.GAMESDB);
    fetch(`${process.env.GAMESDB}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("consiguiendo resultados");
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <div id="main-contents-layout">
          <h1>Nuevos</h1>
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
            aperiam, non praesentium error voluptates quasi ducimus voluptate
            fuga ipsum sed nisi, cum reiciendis deleniti rem possimus debitis.
            Error, repellat! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nostrum eum aperiam, non praesentium error voluptates quasi
            ducimus voluptate fuga ipsum sed nisi, cum reiciendis deleniti rem
            possimus debitis. Error, repellat! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum eum aperiam, non praesentium
            error voluptates quasi ducimus voluptate fuga ipsum sed nisi, cum
            reiciendis deleniti rem possimus debitis. Error, repellat! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
            aperiam, non praesentium error voluptates quasi ducimus voluptate
            fuga ipsum sed nisi, cum reiciendis deleniti rem possimus debitis.
            Error, repellat! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nostrum eum aperiam, non praesentium error voluptates quasi
            ducimus voluptate fuga ipsum sed nisi, cum reiciendis deleniti rem
            possimus debitis. Error, repellat! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum eum aperiam, non praesentium
            error voluptates quasi ducimus voluptate fuga ipsum sed nisi, cum
            reiciendis deleniti rem possimus debitis. Error, repellat! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
            aperiam, non praesentium error voluptates quasi ducimus voluptate
            fuga ipsum sed nisi, cum reiciendis deleniti rem possimus debitis.
            Error, repellat! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nostrum eum aperiam, non praesentium error voluptates quasi
            ducimus voluptate fuga ipsum sed nisi, cum reiciendis deleniti rem
            possimus debitis. Error, repellat!
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Nuevos;
