import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.sass";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

const AppRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById("root")
);
