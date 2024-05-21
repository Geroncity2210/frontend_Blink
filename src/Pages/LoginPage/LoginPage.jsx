import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    try {
      const response = await axios.post('https://blinklebacktestfirebase.vercel.app/log', {
        email,
        password,
      });
      console.log(response.data);
      // Aquí podrías guardar el token de sesión en el localStorage o en una cookie
      // Redireccionar a la página principal u otra página después del inicio de sesión
      alert('Inicio de sesion exitoso');
      navigate('/');
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
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
        </div>
        <div className="logo-image"></div>
      </div>
    </div>
  );
};

export default LoginPage;

