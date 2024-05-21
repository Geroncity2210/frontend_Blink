import React from "react";
import "./MainPage.css";
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className="background">
      <div className="Main">
        <div className="options">
          <div className="logo-image"></div>
          <Link to="/login">
          <button>Iniciar Sesión</button>
          </Link>
          <Link to="/signin">
          <button>Registrarte</button>
          </Link>      
        </div>
      </div>
    </div>
  );
};

export default MainPage;
