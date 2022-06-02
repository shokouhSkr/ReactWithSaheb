import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  // console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="container">
      <ul className="ml-8 inline-flex text-xl">
        {pages.map((page) => (
          <li key={page}>
            <a
              onClick={() => {
                onPageChange(page);
              }}
              className={`block cursor-pointer border border-slate-300 py-2 px-4 outline-none transition-all duration-200 ${
                page === currentPage
                  ? "bg-blue-500 text-white"
                  : "text-slate-500 hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Type checking:
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, // to indicate that itemsCount should be a number
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.number.isRequired,
  currentPage: PropTypes.func.isRequired,
};

export default Pagination;
