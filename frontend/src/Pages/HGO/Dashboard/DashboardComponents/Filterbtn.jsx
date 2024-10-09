import React from 'react';

const Filterbtn = () => {
  return (
    <div className="ms-4 mb-4 d-flex">
      <button className="btn shadow filter-btn btn-sm btn-outline-secondary me-2">Date</button>
      <button className="btn shadow filter-btn btn-sm btn-outline-secondary">Currency</button>
    </div>
  );
};

export default Filterbtn;