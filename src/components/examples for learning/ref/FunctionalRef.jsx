// we use "useRef()" for:
// 1. DOM access
// 2. to store the value of previous state

import { useEffect, useRef } from "react";

const FunctionalRef = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        className="m-12 border border-gray-200 text-4xl focus:border-orange-400 focus:outline-none"
        type="text"
        ref={inputRef}
      />
    </div>
  );
};

export default FunctionalRef;
