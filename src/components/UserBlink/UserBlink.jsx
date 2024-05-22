import React from "react";
import "./UserBlink.css";
import PropTypes from "prop-types";

const UserBlink = ({ user, message }) => {
  return (
    <div className="Blink_container">
      <div className="user_data">
        <div className="user">
          <div className="user_image"></div>
          <h4>{user}</h4>
        </div>
        <div className="editOptions">
          <img src="src\assets\edit icon.svg" alt="Modify" />
          <img src="src\assets\Remove.svg" alt="Erase" />
        </div>
      </div>
      <div className="message_container">{message}</div>
    </div>
  );
};

UserBlink.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default UserBlink;
