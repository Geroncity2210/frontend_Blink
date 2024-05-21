import React from "react";

export const Homepage = () => {
  return (
    <>
      <div className="Navbar">
        <h1>Blinke</h1>
        <div className="buttons">
          <button className="btn_SignOut">Cerrar sesión</button>
          <button className="btn_search"></button>
        </div>
      </div>
      <div className="Nav_create">
        <h2 id="feed-title">Tu Feed</h2>
        <button id="btn_create"></button>
      </div>
      <div className="Blinks_container"></div>
    </>
  );
};
