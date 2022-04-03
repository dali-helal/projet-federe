import React from "react";
import { Login } from "./login/Login.jsx";
import Etudiant from "./etudiant/Etudiant.jsx";
import Admin from "./administrateur/Admin.jsx";
import Prof from "./prof/Prof.jsx";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/etudiant" element={<Etudiant />} />
      <Route exact path="/administrateur" element={<Admin />} />
      <Route exact path="/prof" element={<Prof />} />
    </Routes>
  );
};

export default App;
