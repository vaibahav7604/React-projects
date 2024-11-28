/*import React, { useState } from "react";
import "./Loginpop.css";
import { assets } from "../../assets/assets";
import { message } from "antd";
const Loginpop = ({ setlogin }) => {
  const [currstate, setstate] = useState("Sign Up");
  return (
    <div className="login-pop" id="login-pop">
      <form className="login-container">
        <div className="login-tittle">
          <h2>{currstate}</h2>
          <img
            onClick={() => {
              setlogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="loginpop-input">
          {currstate === "Login" ? 
            <></>
           : (
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              required
            />
          )}
          {currstate === "Sign Up" && (
            <>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
                required
              />
              <input type="email" name="usermail" id="usrmail" required />
              <input type="password" name="password" id="password" required />
              
            </>
          )}
        </div>
        <button>
          {currstate === "Sign Up"
            ? message.warning("Create Account")
            : "Login"}

        </button>{
            currstate==="Login"?
            <p>Create new Account..?<span onClick={()=>setstate("Sign Up")}>Click Here</span></p>:
            <p>Already have one..?  <span onClick={()=>setstate("Login")}>Login here</span></p>
        }
        
        

      </form>
    </div>
  );
};

export default Loginpop;
*/