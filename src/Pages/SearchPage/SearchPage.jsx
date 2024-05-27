import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Blink from "../../components/Blink/Blink";
import Notification from "../../components/Notification/Notification";
import "./SearchPage.css";

const SearchPage = () => {
  const [blinks, setBlinks] = useState([]);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Función para manejar la búsqueda de blinks
  const handleSearch = async () => {
    if (!searchQuery) {
      setMessage("Por favor ingresa una consulta de búsqueda");
      setMessageType("error");
      return;
    }

    const formattedQuery = searchQuery.startsWith("#")
      ? `%23${searchQuery.slice(1)}`
      : searchQuery;

    try {
      const response = await axios.get(
        `https://blinklebacktestfirebase.vercel.app/search?q=${formattedQuery}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setBlinks(response.data);
      setMessage(null);
      setMessageType(null);
    } catch (error) {
      console.error("Error al buscar blinks:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error al buscar los blinks");
      }
      setMessageType("error");
    }
  };

  // Función para manejar el clic en el botón de Cerrar sesión
  const handleSignOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    signOut();
    navigate("/");
  };

  const llevarACreate = () => {
    navigate("/create");
  };

  const llevarAProfile = () => {
    navigate("/profile");
  };

  const llevarAHome = () => {
    navigate("/home");
  };

  return (
    <div className="SearchPage">
      <div className="SearchNavbar">
        <h1>Blinkle</h1>
        <div className="buttons">
          <div className="searchAssets">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="textInput"
            />
            <button className="btn_searchFuncional btn" onClick={handleSearch}>
              Buscar
            </button>
          </div>
          <div className="Search_Buttons">
            <button className="btn_HomeFeed btn" onClick={llevarAHome}>
              Home
            </button>
            <button className="btn_Profile btn" onClick={llevarAProfile}>
              Profile
            </button>
            <button className="btn_SignOut btn" onClick={handleSignOut}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
      <div className="Nav_create">
        <h2 id="feed-title">Results</h2>
        <button id="btn_create" onClick={llevarACreate}>
          Create Blink
        </button>
      </div>
      <div className="Search_Blinks_container">
        <Notification
          message={message}
          type={messageType}
          setMessage={setMessage}
          setMessageType={setMessageType}
        />
        {blinks.map((blink, index) => (
          <Blink
            key={index}
            Username={blink.username}
            message={blink.message}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

