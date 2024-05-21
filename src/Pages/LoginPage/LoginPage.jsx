import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      setMessage(null);
      return;
    }
    try {
      const response = await axios.post('https://blinklebacktestfirebase.vercel.app/log', {
        email,
        password,
      });
      setMessage(response.data.message);
      setError(null);
      setTimeout(() => {
        navigate('/');
      }, 2000); // Esperar 2 segundos antes de navegar
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      setMessage(null);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Error durante el inicio de sesión');
      }
    }
  };

  return (
    <div className="background">
      <div className="Main">
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
          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}
        </div>
        <div className="logo-image"></div>
      </div>
    </div>
  );
};

export default LoginPage;


