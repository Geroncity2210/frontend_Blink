import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserBlink from '../../components/UserBlink/UserBlink';
import Notification from '../../components/Notification/Notification';
import './Myprofile.css';

const MyProfile = () => {
  const [userBlinks, setUserBlinks] = useState([]);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);
    };

    fetchUserData();
  }, []);


  const fetchUserBlinks = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `${token}` };
      const response = await axios.get(`https://blinklebacktestfirebase.vercel.app/blinks/${username}`, { headers });
      setUserBlinks(response.data);
    } catch (error) {
      console.error('Error al obtener los blinks del usuario:', error);
      setError('Error al obtener los blinks del usuario. Inténtalo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserBlinks();
    }
  }, [username]);

  const handleSignOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    navigate('/');
  };

  const llevarACreate = () => {
    navigate('/create');
  };

  const llevarAHome = () => {
    navigate('/home');
  };

  const reloadBlinks = () => {
    fetchUserBlinks(); // Refresca los blinks después de una edición o eliminación
  };

  return (
    <div className="MyProfile">
      <div className="ProfileViewer">
        <div className="Navbar">
          <h1>Blinke</h1>
          <div className="buttons">
            <button className="btn_HomeFeed" onClick={llevarAHome}>Home</button>
            <button className="btn_SignOut" onClick={handleSignOut}>Cerrar sesión</button>
          </div>
        </div>
        <div className="Nav_create">
          <h2 className="title">Tu perfil</h2>
          <button id="btn_create" onClick={llevarACreate}>Crear Blink</button>
        </div>

        <div className="profile">
          <div className="yourData">
            <div className='User_image'></div>
            <p>Usuario: {username}</p>
          </div>
          <h2 className="title display">Tus Blinks</h2>
          <div className="yourBlinks">
            <Notification
              message={error}
              type="error"
              setMessage={setError}
              setMessageType={null}
            />
            {userBlinks.map((blink) => (
              <UserBlink
                key={blink.id}
                user={blink.username}
                message={blink.message}
                blinkId={blink.id}
                reloadBlinks={fetchUserBlinks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;


