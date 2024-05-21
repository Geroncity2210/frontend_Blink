import React from "react";

export const CreateBlink = () => {
  return (
    <>
      <div className="Navbar">
        <h1>Blinke</h1>
        <div className="buttons">
          <button className="btn_SignOut">Cerrar sesión</button>
        </div>
      </div>

      <div className="CreateBlink">
        <input type="text" placeholder="Expresa tus ideas aquí" />
        <button className="btn_blink">Blink!</button>
      </div>
    </>
  );
};
