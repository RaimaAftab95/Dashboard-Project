import React, { useState } from 'react';
import Tabs from '../../common_components/Tabs';
import Filters from './Filterbtn';
import Filterbtn2 from './Filterbtn2'; 
import Table from './Table'; 
import TableTransfer from './TableTransfer'; 
import Pagination from './Pagination';
import { FaLock } from 'react-icons/fa';

const MainContent = ({ rollId }) => {
  const [isTransferMode, setIsTransferMode] = useState(false); 
  const [selectedCurrency, setSelectedCurrency] = useState('PKR'); 

  
  const handleTransferClick = () => {
    setIsTransferMode((prevMode) => !prevMode); // Toggle transfer mode
  };

 
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency); 
  };

  return (
    <div className="main-content1">
     
      <Tabs />
      <hr />

      <div className="d-flex justify-content-start ms-5">
        <button
          className={`btn transferbtn ${isTransferMode ? 'active' : ''}`}
          onClick={handleTransferClick}
        >
          {isTransferMode ? 'Transfers' : 'Transfers'}
        </button>
      </div>

      <div className="ps-lg-4 ps-md-4 pt-2 maincontent-container1 mt-2">
       
        <div className="row mb-4 align-items-start">
          <div className="col-md-6 col-12 d-flex flex-column">
            {isTransferMode && (
              <Filterbtn2 />
            )}
            <Filters 
             selectedCurrency={selectedCurrency}
                onCurrencySelect={handleCurrencySelect} 
                className="my-2"/>
          </div>

      
          <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-start align-items-center mt-3 mt-md-0">
            <div className="balance-box p-3 p-sm-1 m-sm-1">
              <div>
                <div className="balance-txt">Balance</div>
                <div className="amount-txt">
                  {selectedCurrency === 'PKR' ? 'PKR 10,000,0' : 'USD 5,000'} 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
         
          {isTransferMode ? (
            <TableTransfer /> 
          ) : (
            <Table rollId={rollId} /> 
          )}

        
          <div className="d-flex justify-content-between align-items-center mt-5">
            <button className="btn modal-label-txt modal-btn-bg d-flex align-items-center">
              Export <FaLock className="ms-2" />
            </button>

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
