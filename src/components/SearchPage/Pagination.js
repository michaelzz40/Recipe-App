import React from "react";
import "./Pagination.css";

const Pagination = ({ perPage, total, paginate, page }) => {
  const pageNumbers = [];

  for (let i = 1; i <= total; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.slice(0, 11).map(number => {
          return (
            <li
              key={number}
              className={`page-item ${page === number ? "active" : ""}`}
            >
              <a
                onClick={() => paginate(number)}
                href='!#'
                className='page-link'
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
