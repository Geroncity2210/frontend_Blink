import React from "react";
import "./Blink.css";
import PropTypes from "prop-types";

export const Blink = ({ User_name, blink_message }) => {
  return (
    <div className="Blink_container">
      <div className="user_data">
        <div className="user_image"></div>
        <h4>{User_name}</h4>
      </div>
      <div className="message_container">{blink_message}</div>
    </div>
  );
};

Blink.PropTypes = {
  User_name: PropTypes.string.isRequired,
  blink_message: PropTypes.string.isRequired,
};
