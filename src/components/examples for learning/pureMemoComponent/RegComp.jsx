import React, { Component } from "react";

class RegComp extends Component {
  state = {};
  render() {
    console.log("regular comp ------------------");
    return <div>regular component - {this.props.name}</div>;
  }
}

export default RegComp;
