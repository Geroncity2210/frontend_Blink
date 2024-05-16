import React from "react";

export const LoginPage = () => {
  return (
    <div className="background">
      <div className="Main">
        <div className="options">
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Iniciar sesion</button>
        </div>
      </div>
    </div>
  );
};
