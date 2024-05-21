// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blinklebacktestfirebase.vercel.app',
});

export default api;
