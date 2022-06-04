// we can use this file or that one (in this folder)

import React, { useReducer, useContext } from "react";
import { productsDB } from "../db/productsDB";
import _ from "lodash";

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
  console.log(state);
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

    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProducts;
      }
    }

    // filter doesn't muted
    case "filter": {
      // console.log(action.selectedOption.value);

      const value = action.selectedOption.value;

      if (value === "") {
        return productsDB;
      } else {
        const updatedProducts = productsDB.filter((p) => p.availableSizes.indexOf(value) >= 0); // "L" => ["L", "S"]; اگر ایندکسش بود برمیگردونه اگر نباشه منفی یک
        return updatedProducts;
      }
    }

    case "sort": {
      const value = action.selectedOption.value;

      // ****sort without loadash****

      // const products = [...state];  // => sort does muted => clone
      // if (value === "highest") {
      //   const sorttedProducts = products.sort((a, b) => {
      //     if (a.price < b.price) {
      //       return 1;
      //     }
      //     if (a.price > b.price) {
      //       return -1;
      //     }
      //     return 0;
      //   });
      //   return sorttedProducts;
      // }
      // if (value === "lowest") {
      //   const sorttedProducts = products.sort((a, b) => {
      //     if (a.price > b.price) {
      //       return 1;
      //     }
      //     if (a.price < b.price) {
      //       return -1;
      //     }
      //     return 0;
      //   });
      //   return sorttedProducts;
      // }

      const products = [...state];

      if (value === "highest") {
        return _.orderBy(products, ["price"], ["desc"]); // ctrl + space
      } else {
        if (value === "lowest") {
          return _.orderBy(products, ["price"], ["asc"]);
        }
      }
    }

    case "name": {
      const value = action.selectedOption.value;

      const products = [...state];

      if (value === "A-Z") {
        return _.orderBy(products, ["title"], ["asc"]); // ctrl + space
      } else {
        if (value === "Z-A") {
          return _.orderBy(products, ["title"], ["desc"]);
        }
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
