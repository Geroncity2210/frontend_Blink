import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, type, setMessage, setMessageType }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 1500); // 1.5 segundos

      return () => clearTimeout(timer);
    }
  }, [message, setMessage, setMessageType]);

  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

export default Notification;

