import React from "react";
import PropTypes from "prop-types";
import "./Blink.css";

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

Blink.propTypes = {
  Username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Blink;

