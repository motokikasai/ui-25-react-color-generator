import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="selection">
            <div className="color-box"></div>
            <div className="hex">#ffffff</div>
            <button className="remove">Remove</button>
          </div>
        </div>
        <footer>
          <button className="create-color">Create color</button>
        </footer>
      </div>
    );
  }
}

export default App;
