import React from "react";
import { Component } from "react";
import "./Inputs.css";


const regExp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

class Inputs extends Component {
  state = {
    color: "",
    backgroundColor: ""
  };

  changeInput = event => {
    {
      this.setState({
        color: event.target.value
      });
    }
  };

  changeHandler = event => {
    if(regExp.test(event.target.value)){
      this.setState({
        backgroundColor: event.target.value
      });
    }
  };

  render() {
    const styles = {
      color: this.state.color,
      backgroundColor: this.state.backgroundColor
    };
    
    return (
      <div>
        <input
          onChange={this.changeInput}
          placeholder="change text color"
          className="inputs"
          
        />
        <input
          onChange={this.changeHandler}
          placeholder="change background color"
          className="inputs"
        />
        <p className="paragraphs" style={styles}>
          Hello react
        </p>
        <p className="paragraphs" style={styles}>
          Hello react
        </p><p className="paragraphs" style={styles}>
          Hello react
        </p><p className="paragraphs" style={styles}>
          Hello react
        </p><p className="paragraphs" style={styles}>
          Hello react
        </p>
      </div>
    );
  }
}
export default Inputs;
