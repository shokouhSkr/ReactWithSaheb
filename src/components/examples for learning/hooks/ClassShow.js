import React, { Component } from "react";
import FunctionalTimer from "./FunctionalTimer";

class ClassShow extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "React.js",
        price: "99$",
        quantity: 1,
        value: "React.js",
      },
      { id: 2, title: "Node.js", price: "89$", quantity: 1, value: "Node.js" },
      { id: 3, title: "Python", price: "79$", quantity: 1, value: "Python" },
    ],
    isShow: true,
  };
  render() {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <button
          onClick={() => this.setState({ isShow: !this.state.isShow })}
          className="rounded border-2 border-orange-400 bg-orange-300 px-4 py-2 active:bg-orange-400"
        >
          {this.state.isShow ? "Hide" : "Show"}
        </button>
        {this.state.isShow && <FunctionalTimer />}
      </div>
    );
  }
}

export default ClassShow;
