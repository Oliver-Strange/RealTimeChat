import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Welcome to Eugene Chat</h1>
      <p>A new way to keep in touch with the city</p>
      <Link to="/login">
        <button>Sign in</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Landing;
