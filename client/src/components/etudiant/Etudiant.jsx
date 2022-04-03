import React from "react";
import { useEffect } from "react";

const Etudiant = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }
  }, []);
  return <h1>welcomme welcome</h1>;
};
export default Etudiant;
