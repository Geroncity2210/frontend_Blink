import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { MainPage, LoginPage, SignUpPage, Homepage, CreateBlink, Myprofile, SearchPage } from "./Pages";
import AuthProvider, {AuthIsNotSignedIn,AuthIsSignedIn,} from "./context/context";

function App() {
  return (
    <AuthProvider>
    <AuthIsSignedIn>
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/create" element={<CreateBlink />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="*" element={<Navigate replace to={"/404"} />} />
        </Routes>
      </Router>
    </AuthIsSignedIn>
    <AuthIsNotSignedIn>
      <Router>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path="/signin" element={<SignUpPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
      </Router>
    </AuthIsNotSignedIn>
    </AuthProvider>
  );
}

export default App;
