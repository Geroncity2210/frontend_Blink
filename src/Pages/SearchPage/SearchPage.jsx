import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Blink from '../../components/Blink/Blink';
import Notification from '../../components/Notification/Notification';
import './SearchPage.css';

const SearchPage = () => {
  const [blinks, setBlinks] = useState([]);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Función para manejar la búsqueda de blinks
  const handleSearch = async () => {
    if (!searchQuery) {
      setMessage('Por favor ingresa una consulta de búsqueda');
      setMessageType('error');
      return;
    }

    const formattedQuery = searchQuery.startsWith('#') ? `%23${searchQuery.slice(1)}` : searchQuery;

    try {
      const response = await axios.get(`https://blinklebacktestfirebase.vercel.app/search?q=${formattedQuery}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      setBlinks(response.data);
      setMessage(null);
      setMessageType(null);
    } catch (error) {
      console.error('Error al buscar blinks:', error);
      setMessage('Error al buscar los blinks');
      setMessageType('error');
    }
  };

  // Función para manejar el clic en el botón de Cerrar sesión
  const handleSignOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    navigate('/');
  };

  const llevarACreate = () => {
    navigate('/create');
  };

  const llevarAProfile = () => {
    navigate('/profile');
  };

  const llevarAHome = () => {
    navigate('/home');
  };

  return (
    <div className="SearchPage">
      <div className="Navbar">
        <h1>Blinke</h1>
        <div className="buttons">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn_searchFuncional" onClick={handleSearch}>Buscar</button>
          <button className="btn_HomeFeed" onClick={llevarAHome}>Home</button>
          <button className="btn_Profile" onClick={llevarAProfile}>Profile</button>
          <button id="btn_SignOut" onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      </div>
      <div className="Nav_create">
        <h2 id="feed-title">Resultados de la búsqueda</h2>
        <button id="btn_create" onClick={llevarACreate}>Create Blink</button>
      </div>
      <div className="Blinks_container">
        <Notification
          message={message}
          type={messageType}
          setMessage={setMessage}
          setMessageType={setMessageType}
        />
        {blinks.map((blink, index) => (
          <Blink key={index} Username={blink.username} message={blink.message} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

