import React from 'react';
import { useRollId } from '../../common_components/RollIdContext';// Import the hook

const Filterbtn = () => {
  return (
    <div className="ms-4 mb-4 flex flex-wrap space-x-2 space-y-2 sm:space-y-0 justify-start">
    
      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="hgosDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          HGOs
        </button>
        <ul className="dropdown-menu" aria-labelledby="hgosDropdown">
          <li><a className="dropdown-item" href="#">Option 1</a></li>
        </ul>
      </div>

    
      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="dateDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Date
        </button>
        <ul className="dropdown-menu" aria-labelledby="dateDropdown">
          <li><a className="dropdown-item" href="#">10-10-24</a></li>
        </ul>
      </div>

      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="incomingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Incomings
        </button>
        <ul className="dropdown-menu" aria-labelledby="incomingsDropdown">
          <li><a className="dropdown-item" href="#">Option 1</a></li>
        </ul>
      </div>

      
      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="outgoingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Outgoings
        </button>
        <ul className="dropdown-menu" aria-labelledby="outgoingsDropdown">
          <li><a className="dropdown-item" href="#">Option 1</a></li>
        </ul>
      </div>

      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="typesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Types
        </button>
        <ul className="dropdown-menu" aria-labelledby="typesDropdown">
          <li><a className="dropdown-item" href="#">Option 1</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Filterbtn;
