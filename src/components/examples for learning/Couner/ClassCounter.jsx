import React, { Component } from "react";

class ClassCounter extends Component {
  state = { count: 0 };

  addOneHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  addTwoHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  };

  addFiveHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 5 };
    });
  };

  render() {
    return (
      <div className="container mt-8">
        <p className="mb-4 px-8 text-center text-2xl font-medium">
          Count - {this.state.count}
        </p>
        <div className="flex items-center justify-center">
          <button
            onClick={this.addOneHandler}
            className="mx-3 rounded bg-purple-600 py-3 px-5 text-lg text-white active:translate-y-1 active:translate-x-1 active:bg-purple-500"
          >
            add One
          </button>
          <button
            onClick={this.addTwoHandler}
            className="mx-3 rounded bg-blue-600 py-3 px-5 text-lg text-white active:translate-y-1 active:translate-x-1 active:bg-blue-500"
          >
            add Two
          </button>
          <button
            onClick={this.addFiveHandler}
            className="mx-3  rounded bg-green-600 py-3 px-5 text-lg text-white active:translate-y-1 active:translate-x-1 active:bg-green-500"
          >
            add Five
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
