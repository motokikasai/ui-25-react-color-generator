import React from "react";
import "./App.css";
import removedIcon from "./assets/bg-no-color.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [],
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.randomHexGenerator = this.randomHexGenerator.bind(this);
  }

  create() {
    let randomHex = `#${this.randomHexGenerator()}`;
    console.log(randomHex);

    this.setState({
      color: [...this.state.color, randomHex],
    });
  }

  remove() {
    console.log("color removed!");

    this.setState({
      color: this.state.color.filter((each) => {
        return null;
      }),
    });
  }

  randomHexGenerator() {
    return Math.floor(Math.random() * 10000000).toString(16);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.color.length === 0 ? (
            <div className="bg-removed">
              <img src={removedIcon} alt="" />
            </div>
          ) : (
            this.state.color.map((elem) => {
              return (
                <div className="color-selection">
                  <div className="color-box" style={{ background: elem }}></div>
                  <div className="hex">{elem}</div>
                  <button onClick={this.remove} className="remove">
                    Remove
                  </button>
                </div>
              );
            })
          )}
        </div>
        <footer>
          <button onClick={this.create} className="create-color">
            Create color
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
