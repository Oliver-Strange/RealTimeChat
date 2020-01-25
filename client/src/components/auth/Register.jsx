import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        className="userName"
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="userPassword"
        onChange={event => setPassword(event.target.value)}
      />
      <Link onClick={event => (!username || !password ? event.preventDefault() : null)} to="/join">
        <button type="submit">Register</button>
      </Link>
    </div>
  );
};

export default Register;
