import "./App.css";
import React, { Component } from "react";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    inputText: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  deleteHandler = (index) => {
    const auxStr = this.state.inputText.split("");
    auxStr.splice(index, 1);
    const newText = auxStr.join("");
    this.setState({
      inputText: newText,
    });
  };

  render() {
    const charList = this.state.inputText.split("").map((c, index) => {
      return (
        <CharComponent
          key={index}
          char={c}
          onClick={() => this.deleteHandler(index)}
        />
      );
    });
    return (
      <div className="App">
        <input
          value={this.state.inputText}
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <ValidationComponent textLength={this.state.inputText.length} />
        {charList && charList}
      </div>
    );
  }
}

export default App;
