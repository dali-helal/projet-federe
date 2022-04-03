import React from "react";
import { useEffect } from "react";
const Prof = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  return <h1>welcome prof </h1>;
};
export default Prof;
