import React from "react";
import "./Landing.css";
import Button from "react-bootstrap/Button";
import Logo from "../../images/logo.png";
import LandingImage from "../../images/landing-image.png";

export default function Landing() {
  return (
    <div>
      <div className="landing">
        <div className="landing-left">
          <div className="landing-logo">
            <img
              src={Logo}
              alt="Springboard Collaborative logo"
              className="logo"
              height="130vh"
            />
          </div>
          <div className="landing-text">
            <h2>
              We can transform <span style={{ color: '1876C0' }}>Delaware</span>  into a state <br />
              with near-real-time,<span style={{ color: '#1876C0' }}> sustainable zero homelessness</span> 
            </h2>
          </div>
          <div className="landing-buttons">
            <Button variant="primary">Log In</Button>{" "}
            <Button variant="primary">Sign Up</Button>{" "}
          </div>
        </div>
        <div className="landing-right">
          <img
            src={LandingImage}
            className="landing-image"
            alt="image of people smiling"
          />
        </div>
      </div>
    </div>
  );
}
