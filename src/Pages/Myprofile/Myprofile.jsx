import React from "react";

export const Myprofile = () => {
  return (
    <>
      <div className="Navbar">
        <h1>Blinke</h1>
        <div className="buttons">
          <button className="btn_SignOut">Cerrar sesión</button>
        </div>
      </div>

      <div className="Nav_create">
        <h2 id="feed-title">Tu Feed</h2>
        <button id="btn_create"></button>
      </div>

      <div className="profile">
        <div className="yourBlinks">
          {/* aqui se ponen los blinks del usuario */}
        </div>
        <div className="yourData">
          {/*Aqui se ponen los datos del usuario*/}
          <div className="User_image"></div>
          <p>Usuario</p>
          <p>Correo</p>
        </div>
      </div>
    </>
  );
};
