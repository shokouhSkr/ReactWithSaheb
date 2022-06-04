import { GoTrashcan } from "react-icons/go";
import { useEffect } from "react";

const Product = ({ onChange, onDecrement, onIncrement, onDelete, product }) => {
  // console.log(props);

  // 'CDM: ComponentDidMount', 'CDU: ComponentDidUpdate', 'CWUN: componentWillUnmount' => useEffect
  useEffect(() => {
    // console.log("Product.js useEffect");
    return () => {
      // clean-up -> for deleting timer, ...
      // console.log("Product CWUM");
    };
  }, []); // it gets two inputs

  // console.log("Product.js render"); // چون اینجا کلس نیس، قبل از ریترن مینویسمش
  return (
    <div className="mx-12 mb-6 flex items-center justify-around rounded-lg border border-purple-400 bg-purple-50 p-8 text-xl">
      <p>
        product name:
        <span className="ml-2 text-purple-800">{product.title}</span>
      </p>
      <p>
        product price:
        <span className="ml-2 text-pink-600">{product.price}</span>
      </p>
      {/* <input
        value={product.title}
        onChange={onChange}
        type="text"
        className="rounded p-2 ring-1 ring-red-300
        focus:outline-none focus:ring-2 focus:ring-red-300"
      /> */}
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${
          product.quantity === 1
            ? "bg-red-500"
            : product.quantity === 2
            ? "bg-blue-500"
            : "bg-gray-200 text-black"
        } font-semibold`}
      >
        {product.quantity}
      </span>
      <div className="flex gap-x-5">
        {/* Increment */}
        <button
          onClick={onIncrement}
          className="flex items-center justify-center rounded-md border-2 border-purple-500 bg-purple-100 p-2 hover:bg-purple-300 focus:bg-purple-300 focus:ring-2 focus:ring-purple-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Decrement */}
        <button
          onClick={onDecrement}
          className={`flex items-center justify-center rounded-md border-2 p-2 focus:ring-2 ${
            product.quantity === 1
              ? "border-red-500 bg-red-100 hover:bg-red-300 focus:bg-red-300 focus:ring-red-500"
              : "border-purple-500 bg-purple-100 hover:bg-purple-300 focus:bg-purple-300 focus:ring-purple-500"
          } `}
        >
          {product.quantity > 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <GoTrashcan />
          )}
        </button>
      </div>
      <button
        onClick={onDelete}
        className="rounded bg-red-500 px-4 py-1 text-white hover:bg-red-600 focus:bg-red-600 focus:ring-4 focus:ring-red-300 active:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Product;
