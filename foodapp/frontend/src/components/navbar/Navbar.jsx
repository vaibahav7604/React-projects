import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-manu">
        <Link
          to="./"
          onClick={() => {
            setmenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => {
            setmenu("Menu");
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#App-d"
          onClick={() => {
            setmenu("Mobile-app");
          }}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setmenu("Contectus");
          }}
          className={menu === "Contectus" ? "active" : ""}
        >
          Contect us
        </a>
        <a
          href=""
          onClick={() => {
            setmenu("Feadback");
          }}
          className={menu === "Feadback" ? "active" : ""}
        >
          Feddback
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt=""  />
          <div className="dot"></div>
        </div>
        <button><Link to="Signup">Sign-in</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
