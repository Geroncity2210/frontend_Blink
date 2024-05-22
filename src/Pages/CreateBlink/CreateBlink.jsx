import React, { useState } from "react";
import axios from 'axios';
import Notification from '../../components/Notification/Notification';
import "./CreateBlink.css";

const CreateBlink = () => {
  const [blinkContent, setBlinkContent] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  const handleBlinkCreation = async () => {
    try {
      // Verificar que el contenido del blink no esté vacío
      if (!blinkContent.trim()) {
        setNotificationMessage('El contenido del blink no puede estar vacío');
        setNotificationType('error');
        return;
      }

      // Obtener el token de sesión del almacenamiento local
      const token = localStorage.getItem('token');

      // Verificar si el token está presente
      if (!token) {
        setNotificationMessage('No se pudo encontrar el token de sesión. Por favor, inicia sesión nuevamente.');
        setNotificationType('error');
        return;
      }

      // Realizar la solicitud POST para crear el blink
      const response = await axios.post('https://blinklebacktestfirebase.vercel.app/blinks', {
        username: localStorage.getItem('username'),
        message: blinkContent.trim(),
      }, {
        headers: {
          Authorization: token,
        },
      });

      // Mostrar mensaje de éxito
      setNotificationMessage("Blink publicado con exito!");
      setNotificationType('success');

      // Limpiar el contenido del input después de crear el blink
      setBlinkContent('');
    } catch (error) {
      // Mostrar mensaje de error en caso de fallo
      console.error('Error al crear el blink:', error);
      setNotificationMessage('Error al crear el blink. Inténtalo de nuevo más tarde.');
      setNotificationType('error');
    }
  };

  return (
    <>
      <div className="blinkCreator">
        <div className="Navbar">
          <h1>Blinke</h1>
          <div className="buttons">
            <button className="btn_SignOut">Cerrar sesión</button>
          </div>
        </div>

        <div className="CreateBlink">
          <h2>Crear Blink</h2>
          <div className="text">
            <input
              type="text"
              placeholder="Expresa tus ideas aquí"
              value={blinkContent}
              onChange={(e) => setBlinkContent(e.target.value)}
              required
            />
            <button className="btn_blink" onClick={handleBlinkCreation}>Blink!</button>
          </div>
          <Notification
            message={notificationMessage}
            type={notificationType}
            setMessage={setNotificationMessage}
            setMessageType={setNotificationType}
          />
        </div>
      </div>
    </>
  );
};

export default CreateBlink;

