import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from '../../components/Notification/Notification';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage('Por favor, completa todos los campos');
      setMessageType('error');
      return;
    }
    try {
      const response = await axios.post('https://blinklebacktestfirebase.vercel.app/log', {
        email,
        password,
      });
      setMessage(response.data.message);
      setMessageType('success');

      // Guardar el token y el nombre de usuario en localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      setTimeout(() => {
        navigate('/home');
      }, 1500); // Esperar 2 segundos antes de navegar
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Error durante el inicio de sesión');
      }
      setMessageType('error');
    }
  };

  return (
    <div className="background">
      <div className="Main">
      <div className="logo-image"></div>
        <div className="options">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
          <Notification message={message} type={messageType} setMessage={setMessage} setMessageType={setMessageType} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;




