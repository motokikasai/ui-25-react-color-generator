import React from "react";
import "./App.css";
import removedIcon from "./assets/bg-no-color.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.randomHexGenerator = this.randomHexGenerator.bind(this);
  }

  create() {
    let randomHex = `#${this.randomHexGenerator()}`;
    console.log(randomHex);

    this.setState({
      colors: [...this.state.colors, randomHex],
    });
  }

  remove(element) {
    console.log(element);

    this.setState({
      colors: this.state.colors.filter((each) => {
        return each !== element;
      }),
    });
  }

  randomHexGenerator() {
    // console.log(Math.floor(Math.random() * 10000000).toString(16).length);
    let randomHex = Math.floor(Math.random() * 10000000).toString(16);
    while (randomHex.length !== 6) {
      randomHex = Math.floor(Math.random() * 10000000).toString(16);
      console.log(randomHex);
    }

    return randomHex;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.colors.length === 0 ? (
            <div className="bg-no-color">
              <img src={removedIcon} alt="" />
            </div>
          ) : (
            this.state.colors.map((elem, i) => {
              return (
                <div className="color-selection" key={i}>
                  <div className="color-box" style={{ background: elem }}></div>
                  <div className="hex">{elem}</div>
                  <button
                    onClick={() => {
                      this.remove(elem);
                    }}
                    className="remove"
                  >
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
