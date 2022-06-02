// ایده این فایل اینه که وقتی دوتا استیت داریم که اکشن هاشون خیلی شبیه همه، این اپروچ رو پیش گرفتیم که سوییچ کیس مون رو ساده نگه داشتیم

import React, { useState } from "react";
import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CountOne = () => {
  // this approach called "multiple useReducer"
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p className="bg-orange-300">count one is {count}</p>
        <button
          onClick={() => dispatch({ type: "decrement", value: 1 })}
          className="rounded-lg bg-orange-300 p-3"
        >
          dec one
        </button>
        <button
          onClick={() => dispatch({ type: "add", value: 1 })}
          className="m-3 rounded-lg bg-pink-300 p-3"
        >
          add one
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="m-3 rounded-lg bg-purple-300 p-3"
        >
          reset
        </button>
      </div>
      <div>
        <p className="bg-pink-300">count is two {count2}</p>
        <button
          onClick={() => dispatch2({ type: "decrement", value: 1 })}
          className="rounded-lg bg-orange-300 p-3"
        >
          dec one
        </button>
        <button
          onClick={() => dispatch2({ type: "add", value: 1 })}
          className="m-3 rounded-lg bg-pink-300 p-3"
        >
          add one
        </button>

        <button
          onClick={() => dispatch2({ type: "reset" })}
          className="m-3 rounded-lg bg-purple-300 p-3"
        >
          reset
        </button>
      </div>
    </>
  );
};

export default CountOne;
