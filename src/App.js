import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductsReducer from "./components/Products/ProductsReducer";
import ProductsProviderReducer from "./components/Providers/ProductsProviderReducer";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <div className="container h-screen max-w-screen-xl items-center justify-center bg-purple-50">
      <ProductsProviderReducer>
        <NavBar />
        <Filter />
        <ProductsReducer />
      </ProductsProviderReducer>
    </div>
  );
};

export default App;
