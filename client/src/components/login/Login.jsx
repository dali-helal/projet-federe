import React from "react";
import Form from "./LoginForm.jsx";
import isimm from "./images/isimm_logo.png";

export const Login = () => {
  const clickHandler = () => {
    document.querySelector(".form").classList.toggle("translated");
    document
      .querySelector(".pargaraph-container")
      .classList.toggle("translated");
  };

  return (
    <>
      <div className="login">
        <div className="content-page">
          <div className="title-container">
            <img src={isimm} />
            <h2 style={{ textAlign: "center", width: "450px" }}>
              Enseignement en ligne de l'institut supéreiur d'informatiques et
              de mathématiques de monastir
            </h2>
          </div>

          <div className="heading">
            <div className="pargaraph-container">
              <h2>Learning is Best when at home</h2>
              <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                est iusto numquam assumenda ullam aliquid earum fuga id deserunt
                odit.
              </h4>
              <button onClick={clickHandler} style={{ width: "150px" }}>
                Sign in
              </button>
            </div>

            <Form />
          </div>
        </div>
        <div className="img-container"></div>
      </div>
    </>
  );
};
