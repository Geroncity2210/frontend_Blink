import React, { useState } from "react";
import "./UserBlink.css";
import PropTypes from "prop-types";
import axios from "axios";

const UserBlink = ({ user, message, blinkId, reloadBlinks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `${token}` };
      await axios.delete(
        `https://blinklebacktestfirebase.vercel.app/blinks/${user}/${blinkId}`,
        { headers }
      );
      reloadBlinks(); // Recargar los blinks después de borrar
    } catch (error) {
      console.error("Error al borrar el blink:", error);
    }
  };

  const handleEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `${token}` };
      await axios.post(
        `https://blinklebacktestfirebase.vercel.app/blinks/${user}/${blinkId}`,
        { message: editedMessage },
        { headers }
      );
      reloadBlinks(); // Recargar los blinks después de editar
      setIsEditing(false); // Salir del modo de edición
    } catch (error) {
      console.error("Error al editar el blink:", error);
    }
  };

  const handleChange = (event) => {
    setEditedMessage(event.target.value);
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Cancelar la edición y volver al mensaje original
    setEditedMessage(message); // Restaurar el mensaje original
  };

  return (
    <div className="Blink_container">
      <div className="user_data">
        <div className="user">
          <div className="user_image"></div>
          <h4>{user}</h4>
        </div>
        <div className="editOptions">
          {isEditing ? (
            <>
              <button onClick={handleEdit}>Guardar</button>
              <button onClick={handleCancelEdit}>Cancelar</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)}>
                <img src="./src/assets/edit.svg" alt="Modify" />
              </button>
              <button onClick={handleDelete}>
                <img src="./src/assets/Remove.svg" alt="Erase" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="message_container">
        {isEditing ? (
          <textarea value={editedMessage} onChange={handleChange} />
        ) : (
          <div>{message}</div>
        )}
      </div>
    </div>
  );
};

UserBlink.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  blinkId: PropTypes.string.isRequired,
  reloadBlinks: PropTypes.func.isRequired,
};

export default UserBlink;
