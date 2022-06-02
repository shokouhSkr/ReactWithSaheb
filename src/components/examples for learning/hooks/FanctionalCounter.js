import React, { useState, useEffect } from "react";

const FanctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("document title updating");
    document.title = `clicked: ${count} times`;
  }, [count]); // اگر فقط ارایه خالی بود میشد CDM

  return (
    <div className="flex h-screen items-center justify-center gap-x-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded border-2 border-pink-300 bg-yellow-100 p-2 focus:outline-none"
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="rounded border-2 border-pink-300 bg-blue-100 px-4 py-2"
      >
        count: {count}
      </button>
    </div>
  );
};

export default FanctionalCounter;
