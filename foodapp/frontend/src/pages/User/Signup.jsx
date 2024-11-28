import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, message } from "antd";
const Signup = () => {
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

      console.log(data);
      setloading(false);
      message.success("you are Sign-up Sucessfully..");
      navigate("/");
    } catch (err) {
     // console.log(err);
      message.error(err.message);
      setloading(false);
    }
  };

  return (
    <div className="Signup">
      <h2>Sign-Up</h2>
      <div className="signup-contianer">
        <div className="input-container">
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
        </div>
        <p>
          Already Login..?<Link to="/Login">Login</Link>
        </p>

        <div className="button-container">
          <Button
            loading={loading}
            disabled={!username || !password}
            onClick={HandleSubmit}
          >
            Welcome..
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
