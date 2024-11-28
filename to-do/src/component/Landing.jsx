import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Style/Landing.css";
import landing from "./Style/landing.jpg";

function Landing() {
  return (
    <div className="main-Landing">
      <Navbar active={"home"} />
      <img src={landing} alt="landing" />
      <div className="container-Landing">
        <div className="Text home">
          <Link to="/signup">Sing-up</Link>

          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
