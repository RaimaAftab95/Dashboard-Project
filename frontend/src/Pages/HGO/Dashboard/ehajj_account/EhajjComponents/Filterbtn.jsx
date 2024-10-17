// import React, { useState } from 'react';

// const Filterbtn = () => {
//   const [selectedCurrency, setSelectedCurrency] = useState('PKR');

//   // Function to handle the button click
//   const handleCurrencySelect = (currency) => {
//     setSelectedCurrency(currency);
//   };

//   return (
//     <div className="ms-4 mb-4 d-flex align-items-center ms-sm-0">
     
//       <button
//         className={`btn btn-sm me-1 ${selectedCurrency === 'PKR' ? 'selected' : 'unselected'}`}
//         style={{
//           background: selectedCurrency === 'PKR' ? '#CFFCE1' : 'transparent',
//           color: selectedCurrency === 'PKR' ? '#019440' : '#019440',
//           border: 'none',
//         }}
//         onClick={() => handleCurrencySelect('PKR')}
//       >
//         PKR
//       </button>

//       <div className="separator"></div>

     
//       <button
//         className={`btn btn-sm ${selectedCurrency === 'USD' ? 'selected' : 'unselected'}`}
//         style={{
//           background: selectedCurrency === 'USD' ? '#CFFCE1' : 'transparent',
//           color: selectedCurrency === 'USD' ? '#019440' : '#019440',
//           border: 'none',
//         }}
//         onClick={() => handleCurrencySelect('USD')}
//       >
//         USD
//       </button>
//     </div>
//   );
// };

// export default Filterbtn;
import React from 'react';

const Filterbtn = () => {
  return (
    <div className="ms-4 mb-4 flex flex-wrap space-x-2 space-y-2 sm:space-y-0 justify-start">
      {/* HGOs Dropdown */}
      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="hgosDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          HGOs
        </button>
        <ul className="dropdown-menu" aria-labelledby="hgosDropdown">
          <li><a className="dropdown-item" href="#">Option 1</a></li>
        </ul>
      </div>

      {/* Date Dropdown */}
      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="dateDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Date
        </button>
        <ul className="dropdown-menu" aria-labelledby="dateDropdown">
          <li><a className="dropdown-item" href="#">10-10-24</a></li>
        </ul>
      </div>

      {/* Incomings Dropdown */}
      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="incomingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Incomings
        </button>
        <ul className="dropdown-menu" aria-labelledby="incomingsDropdown">
          <li><a className="dropdown-item" href="#">Option 1</a></li>
        </ul>
      </div>

      {/* Outgoings Dropdown */}
      <div className="dropdown">
        <button className="btn shadow filter-btn btn-sm btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" id="outgoingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Outgoings
        </button>
        <ul className="dropdown-menu" aria-labelledby="outgoingsDropdown">
          <li><a className="dropdown-item" href="#">Option 1</a></li>
        </ul>
      </div>

      {/* Types Dropdown */}
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
