import React, { Component } from "react";

// میخوایم وقتی صفحه لود میشه اتومات اینپوتمون فوکوس بشه
class ClassRef extends Component {
  state = {};

  // با این روش میتونیم دسترسی به اینپوت رو فراهم کنیم
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input
          className="m-12 border border-gray-200 text-4xl focus:border-purple-400 focus:outline-none"
          type="text"
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default ClassRef;
