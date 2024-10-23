import React from 'react';
import { useRollId } from '../../common_components/RollIdContext';// Import the hook

const Filterbtn = ({ selectedCurrency, onCurrencySelect }) => {
   const { rollId } = useRollId(); // Get rollId from context
  return (
    <div className="ms-4 mb-4 flex flex-wrap space-x-2 space-y-2 sm:space-y-0 justify-start">
      <button
        className={`btn btn-sm me-1 ${selectedCurrency === 'PKR' ? 'selected' : 'unselected'}`}
        style={{
          background: selectedCurrency === 'PKR' ? '#CFFCE1' : 'transparent',
          color: selectedCurrency === 'PKR' ? '#019440' : '#019440',
          border: 'none',
        }}
        onClick={() => onCurrencySelect('PKR')}
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
        onClick={() => onCurrencySelect('USD')}
      >
        USD
      </button>
    </div>
  );
};

export default Filterbtn;