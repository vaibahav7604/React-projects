import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, message } from "antd";
const Login = () => {
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

      console.log(data);
      //localStorage.setItem("todoAppUser", JSON.stringify(response.data));
      message.success("Logged in Sucessfuly..");
      navigate("/");
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <div className="input-container">
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
      </div>
      <p>
        NewUser..?<Link to="/Signup">Sign-up</Link>
      </p>
      <div className="button-container">
        <Button
          loading={loading}
          disabled={!username || !password}
          onClick={HandleSubmit}
        >
          Login.!
        </Button>
      </div>
    </div>
  );
};

export default Login;
