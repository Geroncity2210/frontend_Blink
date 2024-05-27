import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  MainPage,
  LoginPage,
  SignUpPage,
  Homepage,
  CreateBlink,
  Myprofile,
  SearchPage,
} from "./Pages";
import AuthProvider, {
  AuthIsNotSignedIn,
  AuthIsSignedIn,
} from "./context/context";
import { NFPage } from "./Pages/NFPage/NFPage";
import HomePage from "./Pages/HomePage/Homepage";

function App() {
  return (
    <AuthProvider>
      <AuthIsSignedIn>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/create" element={<CreateBlink />} />
            <Route path="/profile" element={<Myprofile />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<Navigate replace to={"/404"} />} />
            <Route path="/404" element={<NFPage />} />
          </Routes>
        </Router>
      </AuthIsSignedIn>
      <AuthIsNotSignedIn>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate replace to={"/"} />} />
            <Route path="/404" element={<NFPage />} />
          </Routes>
        </Router>
      </AuthIsNotSignedIn>
    </AuthProvider>
  );
}

export default App;
