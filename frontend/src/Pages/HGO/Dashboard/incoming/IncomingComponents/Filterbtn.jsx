import React from 'react';

const Filterbtn = ({ sortData }) => {
  return (
    <div className="ms-4 mb-4 d-flex">
      {/* Date Filter Button */}
      <div className="dropdown me-2">
        <button
          className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
          type="button"
          id="dateDropdown"
          onClick={() => sortData('date')}
        >
          Date
        </button>
      </div>

      {/* Currency Filter Button */}
      <div className="dropdown">
        <button
          className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
          type="button"
          id="currencyDropdown"
          onClick={() => sortData('currency')}
        >
          Currency
        </button>
      </div>
    </div>
  );
};

export default Filterbtn;
