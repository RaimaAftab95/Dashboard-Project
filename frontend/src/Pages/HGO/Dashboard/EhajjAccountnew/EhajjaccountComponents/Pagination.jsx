import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
       
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link focus-shadow-none"
            onClick={handlePrevious}
            aria-label="Previous"
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li className="page-item active">
          <span className="page-link">{currentPage}</span>
        </li>

     
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link focus-shadow-none"
            onClick={handleNext}
            aria-label="Next"
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

