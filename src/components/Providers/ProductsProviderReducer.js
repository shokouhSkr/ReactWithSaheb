// we can use this file or that one (in this folder)

import React, { useReducer, useContext } from "react";
import { productsDB } from "../db/productsDB";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

// const initialState = [
//   {
//     id: 1,
//     title: "React.js",
//     price: "99$",
//     quantity: 1,
//     value: "React.js",
//   },
//   { id: 2, title: "Node.js", price: "89$", quantity: 1, value: "Node.js" },
//   { id: 3, title: "Python", price: "79$", quantity: 1, value: "Python" },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filterdProducts = state.filter((p) => p.id !== action.id);
        return filterdProducts;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "delete": {
      const deletedProduct = state.filter((p) => p.id !== action.id);
      return deletedProduct;
    }

    case "filter": {
      // console.log(action.event.target.value);
      // return state;
      
      if()
      } else {
        const updatedProducts = productsDB.filter(
          (p) => p.availableSizes.indexOf(action.event.target.value) >= 0
        ); // "L" => ["L", "S"]; اگر ایندکسش بود برمیگردونه اگر نباشه منفی یک
        return updatedProducts;
      }
    }

    default:
      return state;
  }
};

/******************************************/
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsDB);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
  return useContext(ProductsContextDispatcher);
};
