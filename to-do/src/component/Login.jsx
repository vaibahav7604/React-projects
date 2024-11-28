import React, { useState } from "react";
import "./Style/Login.css";
import login from "./Style/login.jpg";
import Navbar from "./Navbar";
import { Link, json, useNavigate } from "react-router-dom";
import { Input, message } from "antd";
import { Button } from "antd";
import AuthServices from "../services/authService";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("logged in");
    try {
      setloading(true);
      let data = {
        username,
        password,
      };
      const response = await AuthServices.loginupuser(data);
      console.log(response);
      localStorage.setItem("todoAppUser", JSON.stringify(response.data));
      message.success("Logged in Sucessfuly..");
      navigate("/to-do-list");
      setloading(false);
    } catch (err) {

      console.log(err);
      setloading(false);
    }
  };

  return (
    <div className="Login-container">
      <Navbar />
      <img src={login} alt=".."></img>
      <h4 className="heading">Login</h4>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter.Username.."
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <br />
        <Input.Password
          className="input"
          type="password"
          placeholder="Enter..password.."
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <div className="s-d">
          NewUser..?<Link to="/signup">Sign-up</Link>
        </div>
        <div className="btn">
          <Button
            loading={loading}
            disabled={!username || !password}
            onClick={HandleSubmit}
          >
            Login.!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
