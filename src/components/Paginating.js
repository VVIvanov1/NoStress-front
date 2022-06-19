import React, { useEffect, useState } from "react";

const Paginating = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paging-nav">
      {pageNumbers.map((page) => {
        return (
          <button key={page} onClick={() => paginate(page)}>
            {page}
          </button>
        );
      })}
    </nav>
  );
};

export default Paginating;
