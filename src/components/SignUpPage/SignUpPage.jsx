import React from "react";
import "./SignUpPage.css";

export const SignUpPage = () => {
  return (
    <div className="background">
      <div className="Main">
        <div className="options">
          <input type="text" placeholder="Nombre de usuario" />
          <input type="text" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button>Registrarse</button>
        </div>
        <div className="logo-image"></div>
      </div>
    </div>
  );
};
