import React, { Component } from "react";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import ClickCounter from "./components/examples for learning/hocExample/ClickCounter";
import HoverCounter from "./components/examples for learning/hocExample/HoverCounter";
import ParentComp from "./components/examples for learning/pureMemoComponent/ParentComp";
import ClassRef from "./components/examples for learning/ref/ClassRef";
import FunctionalRef from "./components/examples for learning/ref/FunctionalRef";
import ExpUseRef from "./components/examples for learning/ref/ExpUseRef";
import CounterProvider from "./components/examples for learning/Context/CounterProvider";
import CounterOne from "./components/examples for learning/Context/CounterOne";
import CountReducer2 from "./components/examples for learning/Reducer/CountReducer";

/***************************************************/
// class component:

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor");
  }

  state = {
    products: [
      {
        id: 1,
        title: "React.js",
        price: "99$",
        quantity: 1,
        value: "React.js",
      },
      { id: 2, title: "Node.js", price: "89$", quantity: 1, value: "Node.js" },
      { id: 3, title: "Python", price: "79$", quantity: 1, value: "Python" },
    ],
  };

  incrementHandler = (id) => {
    // 1. id
    // console.log("increment works!, id");

    // 2. index
    const index = this.state.products.findIndex((item) => item.id === id);
    // console.log(index);

    // 3. clone the selected index and update the quantity
    const product = { ...this.state.products[index] };
    product.quantity++;

    // update products
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filterdProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filterdProducts });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      this.setState({ products });
    }
  };

  deleteHandler = (id) => {
    // console.log("deleted!", id);
    const deletedProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: deletedProduct });
  };

  changeInputHandler = (e, id) => {
    // console.log(e.target.value, id);
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.title = e.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  // برای درخواست های بکند
  componentDidMount() {
    // console.log("App.js componentDidMount");
    // AJAX: درخواست های سمت سرور رو اینجا مینویسیم
  }

  // برای تغییرات و اپدیت ها
  componentDidUpdate(prevProps, prevState) {
    // console.log("App.js componentDidUpdate");
    // console.log(prevState);
  }

  // برای بهینه سازی روی کامپوننت ها
  shouldComponentUpdate(nextProps, nextState) {
    return true; // این ولی اجازه میده
    // return false;  اجازه اپدیت شدن رو به برنامه نمیده
  }

  render() {
    console.log("App.js render");
    const { products } = this.state;
    return (
      <div className="h-screen bg-purple-50">
        {/* <CounterProvider>
          <p>Welcome to context</p>
          <CountReducer2 />
          {/* <CounterOne /> */}
        {/* </CounterProvider> */}
        <NavBar totalItems={products.filter((p) => p.quantity > 0).length} />
        <Products
          products={products}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onDelete={this.deleteHandler}
          onChange={this.changeInputHandler}
        />

        {/* <ClickCounter name="shokouh" /> 
        <HoverCounter family="askari" /> */}
      </div>
    );
  }
}

export default App;

/**********************************************************/
// functional component:

// const App = () => {
//   const [products, setProducts] = useState([
//     { id: 1, title: "React.js", price: "99$" },
//     { id: 2, title: "Node.js", price: "89$" },
//     { id: 3, title: "JavaScript", price: "79$" },
//   ]);

//   // چون کامپوننت فانکشناله، دیگه متود نداریم. فانکشن داریم
//   const clickHandler = () => {
//     setProducts([
//       { id: 1, title: "React.js", price: "39$" },
//       { id: 2, title: "Node.js", price: "29$" },
//       { id: 3, title: "JavaScript", price: "19$" },
//     ]);
//   };

//   return (
//     <div className="container h-screen bg-purple-100">
//       <h1 className="mb-4 pt-4 text-center text-3xl">Shopping App</h1>
//       <Products/>
//       <div className="mt-4 flex items-center justify-center">
//         <button
//           onClick={clickHandler}
//           className="items-center justify-center rounded border border-blue-600 bg-blue-400 p-3 text-white active:translate-y-0.5 active:translate-x-0.5 active:bg-blue-500"
//         >
//           Change prices
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
