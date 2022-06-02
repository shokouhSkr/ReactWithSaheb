import React, { Component } from "react";

class Counter extends Component {
  render() {
    // every react component has a property called "props"_key is not one of them though.
    // console.log("props", this.props); -> all props that used.
    // console.log(this.props);

    const { value } = this.props.counter;

    return (
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <span
            className={`m-4 inline-block rounded-md px-2 text-center align-middle text-lg font-bold ${
              value === 0 ? "text-gray-800" : "text-white"
            } ${value === 0 ? "bg-yellow-500" : "bg-blue-500"}`}
          >
            {this.formatCount()}
          </span>
        </div>

        <div className="col-span-2 ml-8 md:col-span-3 xs:col-span-7">
          {/* increment button */}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="m-1 rounded-md bg-gray-500 px-3 py-4 text-xl font-medium text-gray-50 transition-all duration-200 hover:bg-gray-600 focus:ring-4 focus:ring-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {/* decrement button */}
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="m-1 rounded-md bg-gray-500 px-3 py-4 text-xl font-medium text-gray-50  transition-all duration-200 hover:bg-gray-600 focus:ring-4 focus:ring-gray-400"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {/* delete button */}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className=" m-1 rounded-md bg-red-600 px-3 py-4 font-medium text-white transition-all duration-200 hover:bg-red-700 focus:ring-4 focus:ring-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // a method
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>"Zero"</h1> : count; -> we can use jsx directly!
  }
}

export default Counter;
