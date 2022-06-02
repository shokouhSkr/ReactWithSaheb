import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`; //* it changes the tab title on above of browser.
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      // این یعنی اگر کانت تغییر کرد اجرا شه
      console.log("document title updating");
      document.title = `clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div className="flex h-screen items-center justify-center gap-x-4">
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          className="rounded border-2 border-pink-300 bg-yellow-100 p-2 focus:outline-none"
        />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
          className="rounded border-2 border-pink-300 bg-blue-100 px-4 py-2"
        >
          count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
