// اینجا دوتا چیز بررسی میشه:
// 1. DOM دسترسی مستقیم به المان ها در
// 2. store previous state

//1:

// import { useState, useEffect, useRef } from "react";

// const ExpUseRef = () => {
//   const [inputValue, setInputValue] = useState("");

//   const inputRef = useRef();

//   const resetHandler = () => {
//     setInputValue("");
//     inputRef.current.focus(); // که ریست که کردیم روی اینپوت فوکس شه
//   };

//   const changeHandler = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div className="m-8 flex gap-x-2">
//       <button
//         onClick={resetHandler}
//         className="border border-gray-400 bg-gray-200 px-3 py-2 active:bg-gray-300"
//       >
//         Reset
//       </button>
//       <input
//         className="border border-gray-200 p-2 text-4xl focus:border-gray-400 focus:outline-none"
//         type="text"
//         value={inputValue}
//         onChange={changeHandler}
//         ref={inputRef}
//       />
//     </div>
//   );
// };

// export default ExpUseRef;

/********************************************************************/
// 2:

import { useEffect, useRef, useState } from "react";

const ExpUseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState("");

  const previousValue = useRef(); // این یوزرف یه پراپرتی کارنت داره
  const previousCount = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  // console.log("re-render component", inputValue); // هربار کاربر چیزی تایپ میکنه این ری رندر میشه
  // console.log("prev-value", previousValue.current);

  // تغییر مقدار رف در یوزافکت منجر به ری ریندر نمیشه!!!!!!!!!!!!
  useEffect(() => {
    previousValue.current = inputValue;
    console.log("useEffect", previousValue.current);
  }, [inputValue]); // یعنی یوزافکت وقتی صدا زده شه که اینپوت ولیو داره تغییر میکنه

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div className="m-8 flex gap-x-2">
      <input
        className="border border-gray-200 p-2 text-4xl focus:border-gray-400 focus:outline-none"
        type="text"
        value={inputValue}
        onChange={changeHandler}
      />
      <p>
        My name is {inputValue} and it used to be {previousValue.current}
      </p>
      <div>
        <button
          onClick={() => setCount(Math.ceil(Math.random() * 100))}
          className="m-4 rounded border border-green-600 bg-yellow-300 p-3 active:bg-yellow-400"
        >
          Generate random number: {count}
        </button>
        <button
          onClick={() => setCount(Math.ceil(Math.random() * 100))}
          className="rounded border border-red-600 bg-green-300 p-3 active:bg-green-400"
        >
          Previous count: {previousCount.current}
        </button>
      </div>
    </div>
  );
};

export default ExpUseRef;
