import React, { Component } from "react";

class ClassTimer extends Component {
  state = { count: 0 };

  componentDidMount() {
    // for timer and stuff
    this.myTimer = setInterval(() => {
      console.log("hi shokouh, I'm from CDM");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("CWUN");
    clearInterval(this.myTimer);
  }

  render() {
    return <div className="p-4">class interval</div>;
  }
}

export default ClassTimer;
