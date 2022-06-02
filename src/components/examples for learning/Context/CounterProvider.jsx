// همیشه تمپلیت پرووایدر هارو کپی پیست میکنیم چون شبیهن

// میشن توی کامپوننت رو مثل اسم این فایل نامگذاری میکنیم Provide دیتاهایی که

// Context: (the basic)
// 1.create contex => (out of component, at very first section of component) const Sth = React.createContext()
// 2.export context => (out of component, at very last section of component)
// 3.provider => <sth.Povider value={data we want to pass}></Sth.Provider>
// 4.use Context => (in a functional component) const sthElse useContext(Sth) (before return),

import React, { useState, useContext } from "react";
import { useReducer } from "react";

// 1.
const CounterContext = React.createContext(); // state
const CounterContextDispatcher = React.createContext(); // useState()

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

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

// رو خیلی جاها استفاده کنیم پس همین جا اکسپورتشون میکنیم count و setCount چون میخوایم

// 2.
// export const useCount = () => useContext(CounterContext); // state

// export const useCountActions = () => {
//   const setCount = useContext(CounterContextDispatcher);

//   const addOne = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const addFive = () => {
//     setCount((prevCount) => prevCount + 5);
//   };

//   const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   return { addOne, addFive, decrement };
// }; // setState()

/**********************************************************/
// 2. (another way by reducer_lines above are totally fine)

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  return useContext(CounterContextDispatcher);
};
