import React from "react";
import "./CreateBlink.css";

const CreateBlink = () => {
  return (
    <>
      <div className="blinkCreator">
        <div className="Navbar">
          <h1>Blinke</h1>
          <div className="buttons">
            <button className="btn_SignOut">Cerrar sesión</button>
          </div>
        </div>

        <div className="CreateBlink">
          <h2>Crear Blink</h2>
          <div className="text">
            <input type="text" placeholder="Expresa tus ideas aquí" required />
            <button className="btn_blink">Blink!</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateBlink
