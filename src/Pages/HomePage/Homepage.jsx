import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Blink from '../../components/Blink/Blink';
import Notification from '../../components/Notification/Notification';
import './HomePage.css';

const HomePage = () => {
  const [blinks, setBlinks] = useState([]);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const navigate = useNavigate();

  // Función para obtener los blinks
  const getBlinks = async () => {
    try {
      const response = await axios.get('https://blinklebacktestfirebase.vercel.app/blinks', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      setBlinks(response.data);
      setMessage(null);
      setMessageType(null);
    } catch (error) {
      console.error('Error al obtener blinks:', error);
      setMessage('Error al obtener los blinks');
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

  // Efecto para obtener los blinks cuando el componente se monta
  useEffect(() => {
    getBlinks();
  }, []);

  const llevarAProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="HomePage">
      <div className="Navbar">
        <h1>Blinke</h1>
        <div className="buttons">
          <button className="btn_search">Search</button>
          <button className="btn_Profile" onClick={llevarAProfile} >Profile</button>
          <button id="btn_SignOut" onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      </div>
      <div className="Nav_create">
        <h2 id="feed-title">Tu Feed</h2>
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

export default HomePage;

