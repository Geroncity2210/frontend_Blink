import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notification";
import "./CreateBlink.css";

const CreateBlink = () => {
  const [blinkContent, setBlinkContent] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBlinkCreation = async () => {
    try {
      // Verificar que el contenido del blink no esté vacío
      if (!blinkContent.trim()) {
        setNotificationMessage("El contenido del blink no puede estar vacío");
        setNotificationType("error");
        return;
      }

      // Obtener el token de sesión del almacenamiento local
      const token = localStorage.getItem("token");

      // Verificar si el token está presente
      if (!token) {
        setNotificationMessage(
          "No se pudo encontrar el token de sesión. Por favor, inicia sesión nuevamente."
        );
        setNotificationType("error");
        return;
      }

      // Realizar la solicitud POST para crear el blink
      const response = await axios.post(
        "https://blinklebacktestfirebase.vercel.app/blinks",
        {
          username: localStorage.getItem("username"),
          message: blinkContent.trim(),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Mostrar mensaje de éxito
      setNotificationMessage("Blink publicado con exito!");
      setNotificationType("success");

      // Limpiar el contenido del input después de crear el blink
      setBlinkContent("");
    } catch (error) {
      // Mostrar mensaje de error en caso de fallo
      console.error("Error al crear el blink:", error);
      setNotificationMessage(
        "Error al crear el blink. Inténtalo de nuevo más tarde."
      );
      setNotificationType("error");
    }
  };

  // Función para manejar el clic en el botón de Cerrar sesión
  const handleSignOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    signOut();
    navigate("/");
  };

  const llevarAHome = () => {
    navigate("/home");
  };

  const llevarAProfile = () => {
    navigate("/profile");
  };

  const llevarASearch = () => {
    navigate("/search");
  };

  return (
    <>
      <div className="blinkCreator">
        <div className="Navbar">
          <h1>Blinkle</h1>
          <div className="Opbuttons">
            <button className="btn_search" onClick={llevarASearch}>
              Search
            </button>
            <button className="btn_HomeFeed" onClick={llevarAHome}>
              Home
            </button>
            <button className="btn_Profile" onClick={llevarAProfile}>
              Profile
            </button>
            <button className="btn_SignOut" onClick={handleSignOut}>
              Cerrar sesión
            </button>
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
              className="blinkInput"
            />
            <button className="btn_blink" onClick={handleBlinkCreation}>
              Blink!
            </button>
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
