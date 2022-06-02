import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  // هستند CounterProvider اینا دو تا اکسپورت پایینی فایل
  const count = useCount();
  // const { addOne, addFive, decrement } = useCountActions();
  const dispatch = useCountActions();
  // console.log(actions); -> it was brfore destruction of line above

  //   return (
  //     <div>
  //       <h2> count is: {count}</h2>
  //       <button onClick={addOne} className="m-3 rounded-lg bg-red-300 p-3">
  //         add one
  //       </button>
  //       <button onClick={addFive} className="m-3 rounded-lg bg-green-300 p-3">
  //         add five
  //       </button>
  //       <button onClick={decrement} className="rounded-lg bg-blue-300 p-3">
  //         dec one
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div>
      <h2> count is: {count}</h2>
      <button
        onClick={() => dispatch({ type: "add", value: 1 })}
        className="m-3 rounded-lg bg-red-300 p-3"
      >
        add one
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="m-3 rounded-lg bg-green-300 p-3"
      >
        reset
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", value: 1 })}
        className="rounded-lg bg-blue-300 p-3"
      >
        dec one
      </button>
    </div>
  );
};

export default CounterOne;
