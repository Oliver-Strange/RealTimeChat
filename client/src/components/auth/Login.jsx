import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({});

  const handleSubmit = event => {
    if (!credentials) {
      alert("Please enter username and password");
    }
    event.preventDefault();
    axios
      .post("localhost:8080/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/join");
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>login</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={credentials.username}
        className="userName"
        onChange={event => setCredentials(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={credentials.password}
        className="userPassword"
        onChange={event => setCredentials(event.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        Sign In
      </button>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}
export default Login;
