import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;

  return (
    <div className="pt-[60px]">
      <ul className="m-12 ml-0 flex flex-col rounded border text-xl text-slate-500">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            className={`${
              item === selectedItem
                ? "bg-blue-500 text-white"
                : "text-slate-500 hover:bg-gray-200 hover:text-gray-800"
            } block w-full cursor-pointer border-b border-slate-200 py-4 px-0 text-center transition-all duration-200 last:border-none`}
            key={item._id} // these two instead of item._id and item.name; so we can use for any kind of lists
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );

  ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
  };
};

export default ListGroup;
