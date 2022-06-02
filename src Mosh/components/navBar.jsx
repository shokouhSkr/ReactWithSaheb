import React, { Component } from "react";

// class component:

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="mb-5 w-full bg-blue-50 p-5">
//         <a href="#" className="text-2xl font-medium">
//           NavBar
//           <span className="m-1 rounded-full bg-gray-500 px-3 py-1 text-base text-white">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

/****************************************************/
// functional component:

// const NavBar = (props) => {
//   return (
//     <nav className="mb-5 w-full bg-blue-50 p-5">
//       <a href="#" className="text-2xl font-medium">
//         NavBar
//         <span className="m-1 rounded-full bg-gray-500 px-3 py-1 text-base text-white">
//           {props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// };

// export default NavBar;

/****************************************************/
// Destructive arguments:

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="mb-5 w-full bg-blue-50 p-5">
      <a href="#" className="text-2xl font-medium">
        NavBar
        <span className="mx-2 rounded-full bg-gray-500 px-3 py-1 text-base text-white">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
