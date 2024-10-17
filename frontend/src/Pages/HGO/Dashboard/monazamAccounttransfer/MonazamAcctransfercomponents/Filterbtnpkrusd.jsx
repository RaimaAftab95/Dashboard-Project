import React, { useState } from 'react';

const Filterbtnpkrusd = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('PKR');

  // Function to handle the button click
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="ms-4 mb-4 d-flex align-items-center ms-sm-0">
     
      <button
        className={`btn btn-sm me-1 ${selectedCurrency === 'PKR' ? 'selected' : 'unselected'}`}
        style={{
          background: selectedCurrency === 'PKR' ? '#CFFCE1' : 'transparent',
          color: selectedCurrency === 'PKR' ? '#019440' : '#019440',
          border: 'none',
        }}
        onClick={() => handleCurrencySelect('PKR')}
      >
        PKR
      </button>

      <div className="separator"></div>

     
      <button
        className={`btn btn-sm ${selectedCurrency === 'USD' ? 'selected' : 'unselected'}`}
        style={{
          background: selectedCurrency === 'USD' ? '#CFFCE1' : 'transparent',
          color: selectedCurrency === 'USD' ? '#019440' : '#019440',
          border: 'none',
        }}
        onClick={() => handleCurrencySelect('USD')}
      >
        USD
      </button>
    </div>
  );
};

export default Filterbtnpkrusd;
