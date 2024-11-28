import React from "react";
import "./Style/Signup.css";
import login from "./Style/login.jpg";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, message } from "antd";
import { useState } from "react";
import AuthServices from "../services/authService";

function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    console.log("signed up");
    e.preventDefault();
    try {
      setloading(true);
      let data = {
        firstname,
        lastname,
        username,
        password,
      };

      const response = await AuthServices.signupuser(data);
      console.log(response.data);
      setloading(false);
      message.success("you are Sign-up Sucessfully..");
      navigate("/login");
    } catch (err) {
      console.log(err);
      message.error(err.message);
      setloading(false);
    }
  };

  return (
    <div className="Signup-container">
      <Navbar />
      <img src={login} alt=".."></img>
      <h4 className="heading">Sign-Up</h4>

      <div className="inputs">
        <Input
          className="input"
          type="firstname"
          placeholder="FirstName..."
          value={firstname}
          onChange={(e) => {
            setfirstname(e.target.value);
          }}
        />

        <Input
          className="input"
          type="lastname"
          placeholder="LastName..."
          value={lastname}
          onChange={(e) => {
            setlastname(e.target.value);
          }}
        />

        <Input
          className="input"
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
          Already Login..?<Link to="/login">Login</Link>
        </div>
        <div className="btn">
          <Button
            loading={loading}
            disabled={!username || !password}
            onClick={HandleSubmit}
          >
            Signup-Here.!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
