import React from 'react';
import { useRollId } from '../../common_components/RollIdContext'; // Import the useRollId hook

const Filterbtn = () => {
    const { rollId } = useRollId(); // Get rollId from context
  return (
  
    <div className="ms-4 mb-4 d-flex">
     
      {rollId === 'monazam' ? ( 
        <div className="dropdown me-2">
          <button
            className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
            type="button"
            id="hgoDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            HGO
          </button>
          <ul className="dropdown-menu" aria-labelledby="hgoDropdown">
            <li><a className="dropdown-item" href="#">HGO Option</a></li>
          </ul>
        </div>
      ) : null} 

      <div className="dropdown me-2">
        <button
          className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
          type="button"
          id="dateDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Date
        </button>
        <ul className="dropdown-menu" aria-labelledby="dateDropdown">
          <li><a className="dropdown-item" href="#">01-01-2024</a></li>
        </ul>
      </div>

     
      <div className="dropdown me-2">
        <button
          className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle"
          type="button"
          id="currencyDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Currency
        </button>
        <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
          <li><a className="dropdown-item" href="#">USD</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Filterbtn;
