import { useProducts, useProductsActions } from "../Providers/ProductsProviderReducer";
import Product from "../Product/Product";

const Products = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

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
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
          onDelete={() => dispatch({ type: "delete", id: product.id })}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
        />
      ))}
    </div>
  );
};

export default Products;
