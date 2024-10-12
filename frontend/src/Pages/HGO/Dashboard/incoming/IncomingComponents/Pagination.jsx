import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {[...Array(totalPages).keys()].map((index) => (
          <li key={index} className={`page-item ${index === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(index)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages - 1))}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
