import React from "react";

import { Route } from "react-router-dom";

import Join from "./components/rtc/Join";
import Chat from "./components/rtc/Chat";
import Landing from "./components/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Landing} />
        <Route path="/join" component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
