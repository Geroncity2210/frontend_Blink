import React from "react";
import "./Blink.css";
import PropTypes from "prop-types";

const Blink = ({ Username, message }) => {
  return (
    <div className="Blink_container">
      <div className="user_data">
        <div className="user_image"></div>
        <h4>{Username}</h4>
      </div>
      <div className="message_container">{message}</div>
    </div>
  );
};

Blink.PropTypes = {
  User_name: PropTypes.string.isRequired,
  blink_message: PropTypes.string.isRequired,
};

export default Blink;
