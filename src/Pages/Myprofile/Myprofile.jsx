import React from "react";
import "./Myprofile.css";
import UserBlink from "../../components/UserBlink/UserBlink";

export const Myprofile = () => {
  return (
    <>
      <div className="ProfileViewer">
        <div className="Navbar">
          <h1>Blinke</h1>
          <div className="buttons">
            <button className="btn_SignOut">Cerrar sesión</button>
          </div>
        </div>

        <div className="Nav_create">
          <h2 className="title">Tu perfil</h2>
          <button id="btn_create">Crear Blink</button>
        </div>

        <div className="profile">
          <div className="yourData">
            {/*Aqui se ponen los datos del usuario*/}
            <div className="User_image"></div>
            <p>Usuario</p>
            <p>Correo</p>
          </div>
          <h2 className="title display">Tus Blinks</h2>
          <div className="yourBlinks">
            {/* aqui se ponen los blinks del usuario */}
          </div>
        </div>
      </div>
    </>
  );
};
