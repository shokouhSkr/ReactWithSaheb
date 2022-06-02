// rsc
import React, { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviderReducer";
import Select from "react-select";

const Filter = () => {
  const dispatch = useProductsActions();

  const [value, setValue] = useState("");

  // ****without library****
  // const changeHandler = (e) => {
  //   dispatch({ type: "filter", event: e });
  //   setValue(e.target.value);
  // };

  const changeHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "filter", selectedOption }); // e همون
    setValue(selectedOption);
  };

  // ****for library****
  const options = [
    { value: "", lable: "All" },
    { value: "XS", lable: "XS" },
    { value: "S", lable: "S" },
    { value: "M", lable: "M" },
    { value: "L", lable: "L" },
    { value: "XL", lable: "XL" },
    { value: "XXL", lable: "XXL" },
  ];

  return (
    <div className="mb-2 text-center">
      <p className="mb-2">filter products base on:</p>
      <div className="flex items-center justify-center gap-x-2">
        order by:
        {/* <select  // ****without library****
          value={value}
          onChange={changeHandler}
          className="rounded border-2 border-purple-300 focus:border-purple-400 focus:outline-none"
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select> */}
        <Select value={value} onChange={changeHandler} options={options} />
      </div>
    </div>
  );
};

export default Filter;
