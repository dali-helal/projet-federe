import React from "react";
import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }
  }, []);

  return <h3>Admin welcome </h3>;
};
export default Admin;
