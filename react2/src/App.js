import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    rect: true
  };

  handleClick = () => {
    this.setState({
      rect: !this.state.rect
    });
  };
  render() {
    let rect = this.state.rect ? "rect2" : "rect";
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        <div className={rect} />
      </div>
    );
  }
}

export default App;
