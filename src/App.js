import React, { Component } from "react";
import { render } from "react-dom";
import Inputs from "./Components/Inputs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Inputs />
      </div>
    );
  }
}

export default App;
render(<App />, document.getElementById("root"));
