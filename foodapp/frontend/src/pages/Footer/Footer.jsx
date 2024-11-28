import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import {
  LinkedinFilled,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>asdf</p>
          <div className="footer-social-icon">
            <LinkedinFilled style={{ fontSize:'35px' , margin:'7px', color:'black'}}  />
            <FacebookFilled style={{ fontSize:'35px' , margin:'7px', color:'black'}}/>
            <TwitterOutlined  style={{ fontSize:'35px' , margin:'7px', color:'#eb2f96'}}/>
          </div>
        </div>

        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>About-Us</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-905-4607-904</li>
            <li>@vaibhavmeghani79@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
    <p className="footer-copyright">Reserved</p>
    </div>
  );
};

export default Footer;
