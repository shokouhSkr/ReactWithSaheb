// rsc
import React, { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviderReducer";
import SelectComponent from "../../common/Select/Select";
import Search from "../../common/Search/Search";

// ****for library****
const filterOptions = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const nameOptions = [
  { value: "A-Z", label: "A-Z" },
  { value: "Z-A", label: "Z-A" },
];

const Filter = () => {
  const dispatch = useProductsActions();

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [name, setName] = useState("");

  const filterHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort }); // که وقتی روی سایز ها فیلتر بود، به فیلتر قیمت ها هم همچنان توجه کنه
    dispatch({ type: "name", selectedOption: name });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  const nameHandler = (selectedOption) => {
    dispatch({ type: "name", selectedOption });
    setName(selectedOption);
  };

  return (
    <div className="mb-2 flex items-center justify-start px-12">
      <p className="mb-8 mr-10 text-lg font-semibold">filter products base on:</p>
      <div className="mb-8 flex items-center justify-center gap-x-4">
        <div className="flex items-center justify-center gap-x-5">
          <Search filter={filter} />

          {/* filter by size */}
          <SelectComponent
            value={filter}
            onChange={filterHandler}
            options={filterOptions}
            title={"filter by price"}
          />

          {/* sort by price */}
          <SelectComponent
            value={sort}
            onChange={sortHandler}
            options={sortOptions}
            title={"sort by price"}
          />

          {/* sort by name */}
          <SelectComponent
            value={name}
            onChange={nameHandler}
            options={nameOptions}
            title={"sort by name"}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
