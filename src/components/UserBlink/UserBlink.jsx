import React from "react";
import "./UserBlink.css";
import PropTypes from "prop-types";
import axios from "axios";

const UserBlink = ({ user, message, blinkId, reloadBlinks }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `${token}` };
      await axios.delete(`https://blinklebacktestfirebase.vercel.app/blinks/${user}/${blinkId}`, { headers });
      reloadBlinks(); // Recargar los blinks después de borrar
    } catch (error) {
      console.error("Error al borrar el blink:", error);
    }
  };

  

  const handleEdit = async () => {
    // Aquí puedes implementar la lógica para editar el blink
    console.log("Editar blink:", blinkId);
  };

  return (
    <div className="Blink_container">
      <div className="user_data">
        <div className="user">
          <div className="user_image"></div>
          <h4>{user}</h4>
        </div>
        <div className="editOptions">
          <button onClick={handleEdit}>
            <img src="src\assets\edit icon.svg" alt="Modify" />
          </button>
          <button onClick={handleDelete}>
            <img src="src\assets\Remove.svg" alt="Erase" />
          </button>
        </div>
      </div>
      <div className="message_container">{message}</div>
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

