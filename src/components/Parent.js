import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  render() {
    const kids = this.props.children.map((child) => {
      return <Child info={child} />;
    });

    console.log(kids);
    return (
      <div style={{ border: "solid green", padding: "20px" }}>
        Parent Component
        {kids}
      </div>
    );
  }
}

export default Parent;
