// rsc
import React, { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProviderReducer";

const Search = ({ filter }) => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value); // اینه که میذاره تو اینپوت بنویسیم و درست کار کنه
  };

  return (
    <div className="mb-3 flex items-center justify-start px-12">
      <span>search for: </span>
      <input
        className="ml-3 w-1/3 rounded border border-pink-200 p-2 focus:border-pink-400 focus:outline-none"
        type="text"
        placeholder="search for ..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
