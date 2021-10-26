import { Component, StrictMode } from "react";
import ReactDom from "react-dom";

class AppContainer extends Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <StrictMode>
        <div>Hello world!!!</div>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
