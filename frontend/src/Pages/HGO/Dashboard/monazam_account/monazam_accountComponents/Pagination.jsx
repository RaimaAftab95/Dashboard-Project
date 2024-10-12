// import React from 'react';

// const Pagination = () => {
//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="pagination">
//         <li className="page-item">
//           <a className="page-link" href="#" aria-label="Previous">
//             <span aria-hidden="true">&laquo;</span>
//           </a>
//         </li>
//         {[...Array(10)].map((_, index) => (
//           <li key={index} className={`page-item ${index === 0 ? 'active' : ''}`}>
//             <a className="page-link" href="#">
//               {index + 1}
//             </a>
//           </li>
//         ))}
//         <li className="page-item">
//           <a className="page-link" href="#" aria-label="Next">
//             <span aria-hidden="true">&raquo;</span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;


import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Total number of pages

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
        {/* Previous Button */}
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

        {/* Current Page Number */}
        <li className="page-item active">
          <span className="page-link">{currentPage}</span>
        </li>

        {/* Next Button */}
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

