import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landingContainer">
      <h1 className="title">Welcome to Eugene Chat</h1>
      <p className="tagline">Connecting Citizens to the City</p>
      <Link to="/login" className="loginLink">
        <button className="signInButton">Sign in</button>
      </Link>
      <Link to="/register" className="registerLink">
        <button className="regButton">Register</button>
      </Link>
    </div>
  );
}

export default Landing;
