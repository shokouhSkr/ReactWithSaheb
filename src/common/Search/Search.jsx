// rsc
import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <span>search for: </span>
      <input type="search" placeholder="search for ..." onChange={changeHandler} value={value} />
    </div>
  );
};

export default Search;
