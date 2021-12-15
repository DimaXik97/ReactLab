import { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/main.scss";

class AppContainer extends Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
