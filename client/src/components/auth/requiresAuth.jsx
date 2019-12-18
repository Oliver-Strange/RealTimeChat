import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";
axios.interceptors.request.use(
  options => {
    options.header.authorization = localStorage.token;
    return options;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.token;
      const PlsLogin = <div>Please login</div>;

      return <>{token ? <Component {...this.props} /> : PlsLogin}</>;
    }
  };
}
