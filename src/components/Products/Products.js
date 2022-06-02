import { useProducts, useProductsActions } from "../Providers/ProductsProviderReducer";
import Product from "../Product/Product";

const Products = () => {
  const products = useProducts();
  const { incrementHandler, decrementHandler, deleteHandler, changeInputHandler } =
    useProductsActions();

  // console.log("Products.js render");
  if (products.length === 0)
    return (
      <div className="flex items-center justify-center text-3xl text-red-700">
        <p>There is no product in your shopping cart</p>
      </div>
    );

  return (
    <div>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          onIncrement={() => incrementHandler(product.id)}
          onDecrement={() => decrementHandler(product.id)}
          onDelete={() => deleteHandler(product.id)}
          onChange={(e) => changeInputHandler(e, product.id)}
        />
      ))}
    </div>
  );
};

export default Products;
