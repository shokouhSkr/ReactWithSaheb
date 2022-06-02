import React, { useState } from "react";
import WithCounter from "../hoc/withCount";

const ClickCounter = ({ count, incrementCount, name }) => {
  console.log(name);
  return (
    <div>
      <button
        onClick={incrementCount}
        className="rounded border border-pink-200 bg-pink-100 px-4 py-2 text-3xl"
      >
        clicked {count} times
      </button>
    </div>
  );
};

export default WithCounter(ClickCounter, 5); // incrementValue
