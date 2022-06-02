import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="m-4 mb-5 rounded-md bg-blue-500 py-2 px-4 text-lg font-medium text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // id={counter.id}
            // value={counter.value}
            counter={counter}
          /> // insted of using these props, we can use only "counter={counter}". it has everything!
        ))}
      </div>
    );
  }
}

export default Counters;
