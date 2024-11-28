import React from "react";
import "./AppDownload.css";
import { AndroidFilled, AppleFilled } from "@ant-design/icons";
import { Route, useNavigate } from "react-router-dom";
const AppDownload = () => {
  const navigate = useNavigate();
  return (
    <div className="App-d" id="App-d">
      <p>
        <>
          Download our App for better experiance
          <br />
          <div className="app-d-plateform">
            <AndroidFilled
              className="icon"
              style={{
                fontSize: "50px",
                margin: "10px",
                color: "black",
                cursor: "cell",
              }}
            />
            <AppleFilled
              className="icon2"
              style={{
                fontSize: "50px",
                margin: "10px",
                color: "black",
                cursor: "cell",
              }}
            />
          </div>
        </>
      </p>
    </div>
  );
};

export default AppDownload;
