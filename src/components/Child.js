import React, { Component } from "react";

export class Child extends Component {
  render() {
    console.log(this.props.info);
    return (
      <div style={{ border: "solid red", padding: "20px" }}>
        Child Component
        <p>My name is {this.props.info.name}</p>
      </div>
    );
  }
}

export default Child;
