import React, { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = () => {
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };

    const updatedItems = [...item, addedItem];

    setItem(updatedItems);
  };

  return (
    <div className="m-8">
      <button
        className="mb-2 rounded bg-blue-100 p-3 active:bg-blue-200"
        onClick={addItemHandler}
      >
        add item
      </button>
      {item.map((item) => (
        <li key={item.id}>{item.number}</li>
      ))}
    </div>
  );
};

export default HookArray;
