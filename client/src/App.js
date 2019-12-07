import React from "react";

import { Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </div>
    );
  }
}

export default App;
