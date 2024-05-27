import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Notification from "../../components/Notification/Notification";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      setMessage("Por favor, completa todos los campos");
      setMessageType("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Por favor, ingresa un correo electrónico válido");
      setMessageType("error");
      return;
    }
    try {
      const response = await axios.post(
        "https://blinklebacktestfirebase.vercel.app/sign",
        {
          username,
          email,
          password,
        }
      );
      setMessage(response.data.message);
      setMessageType("success");
      setTimeout(() => {
        navigate("/login");
      }, 1500); // Esperar 1.5 segundos antes de navegar
    } catch (error) {
      console.error("Error durante el registro:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error durante el registro");
      }
      setMessageType("error");
    }
  };

  return (
    <div className="background">
      <div className="Main">
        <div className="logo-image"></div>
        <div className="options">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signupInput"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signupInput"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signupInput"
          />
          <button onClick={handleSignUp}>Registrarse</button>
          <Notification
            message={message}
            type={messageType}
            setMessage={setMessage}
            setMessageType={setMessageType}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
