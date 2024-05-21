import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, LoginPage, SignUpPage } from "./Pages";
import { Homepage } from "./Pages/HomePage/Homepage";
import { CreateBlink } from "./Pages/CreateBlink/CreateBlink";
import { Myprofile } from "./Pages/Myprofile/Myprofile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/create" element={<CreateBlink />} />
        <Route path="/profile" element={<Myprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
