import React from "react";
import { NavLink } from "react-router-dom";

import Login from "../auth/Login";

function NavBar() {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.history.push("/login");
  };
  return (
    <div>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
}

export default NavBar;
