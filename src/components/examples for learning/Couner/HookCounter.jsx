import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  // update state based on "previous" state => callback function: setCount((prev..) => {})
  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1); // چون تک خطیه، نیازی به ریترن و {} نیست
  };

  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const addFiveHandler = () => {
    // setCount(count + 5);
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="container mt-8">
      <p className="mb-4 px-8 text-center text-2xl font-medium">
        Count - {count}
      </p>
      <div className="flex items-center justify-center">
        <button
          onClick={addOneHandler}
          className="mx-3 rounded bg-purple-600 py-3 px-5 text-lg text-white active:translate-y-1 active:translate-x-1 active:bg-purple-500"
        >
          add One
        </button>
        <button
          onClick={addTwoHandler}
          className="mx-3 rounded bg-blue-600 py-3 px-5 text-lg text-white active:translate-y-1 active:translate-x-1 active:bg-blue-500"
        >
          add Two
        </button>
        <button
          onClick={addFiveHandler}
          className="mx-3  rounded bg-green-600 py-3 px-5 text-lg text-white active:translate-y-1 active:translate-x-1 active:bg-green-500"
        >
          add Five
        </button>
      </div>
    </div>
  );
};

export default HookCounter;
