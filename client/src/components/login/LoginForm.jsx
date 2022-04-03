import React from "react";
import { useState } from "react";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [res, setres] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.status === "exists") {
      setres(data.msg);
    } else if (data.status === "ok") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("user", data.user);

      if (data.cle === "Admin") window.location.href = "administrateur";
      else if (data.cle === "prof") window.location.href = "prof";
      else window.location.href = "etudiant";
    } else {
      setres(data.msg);
    }
  };

  const clickHandler = () => {
    document.querySelector(".form").classList.toggle("translated");
    document
      .querySelector(".pargaraph-container")
      .classList.toggle("translated");
  };

  return (
    <form
      display={{ padding: "30px" }}
      onSubmit={submitHandler}
      className="translated form"
    >
      <IconContext.Provider value={{ color: "#666" }}>
        <div>
          <FaUser />
          <input
            type="email"
            placeholder="Email@gmail.com"
            autoComplete="autocomplete"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>

        <div>
          <FaLock />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
      </IconContext.Provider>

      <h4 style={{ marginBottom: "1rem", color: "#3B75BB" }}>
        Forgot password ?
      </h4>
      <p style={{ marginBottom: "10px" }}>{res}</p>

      <button type="submit">Sign in</button>

      <FaArrowLeft
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          transform: "scale(1.5)",
          color: "#555",
          cursor: "pointer",
        }}
        className="btn"
        onClick={clickHandler}
      />
    </form>
  );
};
export default Form;
