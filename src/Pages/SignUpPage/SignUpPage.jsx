import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpPage.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    try {
      const response = await axios.post('https://blinklebacktestfirebase.vercel.app/sign', {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error durante el registro:', error);
    }
  };

  return (
    <div className="background">
      <div className="Main">
        <div className="options">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button onClick={handleSignUp}>Registrarse</button>
        </div>
        <div className="logo-image"></div>
      </div>
    </div>
  );
};

export default SignUpPage;


