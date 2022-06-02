import { useProducts } from "../Providers/ProductsProviderReducer";

const NavBar = () => {
  // console.log("NavBar.js render");
  const products = useProducts();
  const totalItems = products.filter((p) => p.quantity > 0).length;

  return (
    <header className="ic mb-8 flex w-full justify-center gap-x-4 bg-purple-200 p-10 text-2xl">
      <h1>The number of items in your cart:</h1>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-800 p-4 text-lg text-white">
        {totalItems}
      </span>
    </header>
  );
};

export default NavBar;
