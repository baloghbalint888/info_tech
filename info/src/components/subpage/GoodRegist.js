import React from "react";
import { useState } from "react";
import reg from "./img/website.png";
import "bootstrap/dist/css/bootstrap.css";

function GoodRegist() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="kozep back garis">
      <p className="display-6 kozep infogreen">SIKERES REGISZTRÁCIÓ !</p>
      <img className="" src={reg} alt="" />
      <p className="h1 infogreen">Jelentkezz be!</p>
    </div>
  );
}

export default GoodRegist;
