import React from "react";
import "./App.css";

import Parent from "./components/Parent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        { name: "Bobbie", age: 2 },
        { name: "Jenny", age: 3 },
        { name: "Joey", age: 4 },
        { name: "Bonnie", age: 5 },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        App Component
        <Parent children={this.state.children} />
      </div>
    );
  }
}

export default App;
