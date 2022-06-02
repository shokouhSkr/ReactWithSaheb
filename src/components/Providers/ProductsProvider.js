// اینجا برخلاف تمپلیت اصلی از" ردیوسر" استفاده نمیکنیم

import React, { useState, useContext } from "react";

// 1. creat context
const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

/******************************************/
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "React.js",
      price: "99$",
      quantity: 1,
      value: "React.js",
    },
    { id: 2, title: "Node.js", price: "89$", quantity: 1, value: "Node.js" },
    { id: 3, title: "Python", price: "79$", quantity: 1, value: "Python" },
  ]);

  return (
    // 2. provide context
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

// 3. export conte
export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
  const products = useContext(ProductsContext);
  const setProducts = useContext(ProductsContextDispatcher);

  const incrementHandler = (id) => {
    // 1. id
    // console.log("increment works!, id");

    // 2. index
    const index = products.findIndex((item) => item.id === id);
    // console.log(index);

    // 3. clone the selected index and update the quantity
    const product = { ...products[index] };
    product.quantity++;

    // update products
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filterdProducts = products.filter((p) => p.id !== id);
      setProducts(filterdProducts);
    } else {
      const updatedProducts = [...products];
      product.quantity--;
      updatedProducts[index] = product;
      // console.log(product); => اینو لاگ میکنیم در حالتی که "ست پروداکت" کامنت شده. اگر کوانتیتی با هر بار دکریز کردن تغییر نکرد یعنی میویتت نمیشه و این عالیه
      setProducts(updatedProducts);
    }
  };

  const deleteHandler = (id) => {
    const deletedProduct = products.filter((p) => p.id !== id);
    setProducts(deletedProduct);
  };

  const changeInputHandler = (e, id) => {
    // console.log(e.target.value, id);
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.title = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  return { incrementHandler, decrementHandler, deleteHandler, changeInputHandler };
};
