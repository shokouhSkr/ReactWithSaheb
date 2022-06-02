// reducer is so familiar to useState

// steps:
// 1. import useReducer()
// 2. useReducer(() => (reducer, initialState)
// 3. return: [count, dispatch]
// 4. reducer(state, action)

import React, { useState } from "react";
import { useReducer } from "react";

const CountOne = () => {
  // const initialState = 0
  const initialState = {
    firstCounter: 0,
    secoundCounter: 0,
  };
  const [count, dispatch] = useReducer((state, action) => {
    // همه هندلر هارو تو خودش داره
    console.log(state, action);
    switch (action.type) {
      case "add":
        // return state + 1
        return { ...state, firstCounter: state.firstCounter + action.value }; // چون توی ابجکته و ما با . به اعضاش دسترسی پیدا میکنیم

      case "decrement":
        // return state - 1
        return { ...state, firstCounter: state.firstCounter - action.value };

      case "add2":
        return {
          ...state,
          secoundCounter: state.secoundCounter + action.value,
        }; // چون توی ابجکته و ما با . به اعضاش دسترسی پیدا میکنیم

      case "decrement2":
        return {
          ...state,
          secoundCounter: state.secoundCounter - action.value,
        };

      case "reset":
        return initialState;
      default:
        return state;
    }
  }, initialState);

  // اینا معادل سوییچ کیس بالاس
  // const add = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const reset = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  return (
    <div>
      <p className="bg-orange-300">count one is {count.firstCounter}</p>
      <p className="bg-pink-300">count is two {count.secoundCounter}</p>
      <button
        // onClick={() => dispatch("add")}
        onClick={() => dispatch({ type: "add", value: 1 })}
        className="m-3 rounded-lg bg-orange-300 p-3"
      >
        add one
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", value: 1 })}
        className="rounded-lg bg-orange-300 p-3"
      >
        dec one
      </button>
      <button
        // onClick={() => dispatch("add")}
        onClick={() => dispatch({ type: "add2", value: 20 })}
        className="m-3 rounded-lg bg-pink-300 p-3"
      >
        add one
      </button>
      <button
        onClick={() => dispatch({ type: "decrement2", value: 1 })}
        className="rounded-lg bg-pink-300 p-3"
      >
        dec one
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="m-3 rounded-lg bg-purple-300 p-3"
      >
        reset
      </button>
    </div>
  );
};

export default CountOne;
