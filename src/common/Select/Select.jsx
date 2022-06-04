import React from "react";
import Select from "react-select";

// const SelectComponent = ({ value, onChange, options, title }) => {
const SelectComponent = ({ title, ...rest }) => {
  // console.log(rest); => value, options, onChange
  return (
    <div className="flex items-center justify-center gap-x-2 bg-red-50">
      <span>{title}</span>
      <Select {...rest} />
    </div>
  );
};

export default SelectComponent;
