// import React, { useState } from 'react';
// import Tabs from '../../common_components/Tabs';
// import Filters from './Filterbtn';
// import Filterbtn2 from './Filterbtn2'; // Import for additional Filter button
// import Table from './Table'; // Default Table
// import TableTransfer from './TableTransfer'; // Import for Transfer Table
// import Pagination from './Pagination';
// import { FaLock } from 'react-icons/fa';

// const MainContent = ({ rollId }) => {
//   const [isTransferMode, setIsTransferMode] = useState(false); // State for Transfer Mode

//   // Toggle between normal and transfer modes
//   const handleTransferClick = () => {
//     setIsTransferMode((prevMode) => !prevMode); // Toggle transfer mode
//   };

//   return (
//     <div className="main-content1">
//       {/* Tabs Section */}
//       <Tabs />
// <hr></hr>
//       {/* Transfer Button Below Tabs */}
//       <div className="d-flex justify-content-start ms-5">
//         <button 
//         className={`btn transferbtn ${isTransferMode ? 'active' : ''}`}
//         onClick={handleTransferClick}>
//            {isTransferMode ? 'Transfers' : 'Transfers'}
//         </button>
//       </div>

//       {/* Container for Filters, Balance, and Table */}
//       <div className="ps-lg-4 ps-md-4 pt-2 maincontent-container1 mt-2">
//         {/* Filters, Filterbtn2, and Balance Box */}
//         <div className="row mb-4 align-items-start">
//           <div className="col-md-6 col-12 d-flex flex-column">
//             {/* Conditionally render Filterbtn2 if Transfer mode is active */}
//             {isTransferMode && (
//               <Filterbtn2 className="my-2" /> // Place Filterbtn2 above Filters
//             )}
//             <Filters />
//           </div>

//           {/* Balance Box on the other side */}
//           <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-start align-items-center mt-3 mt-md-0">
//             <div className="balance-box p-3 p-sm-1 m-sm-1">
//               <div>
//                 <div className="balance-txt">Balance</div>
//                 <div className="amount-txt">PKR 10,000,0</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table and Pagination Container */}
//         <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
//           {/* Conditionally render the appropriate table */}
//           {isTransferMode ? (
//             <TableTransfer /> // Show TableTransfer if Transfer mode is active
//           ) : (
//             <Table rollId={rollId} /> // Show Default Table otherwise
//           )}

//           {/* Export Button and Pagination */}
//           <div className="d-flex justify-content-between align-items-center mt-5">
//             <button className="btn modal-label-txt modal-btn-bg d-flex align-items-center">
//               Export <FaLock className="ms-2" />
//             </button>

//             <Pagination />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContent;


import React, { useState } from 'react';
import Tabs from '../../common_components/Tabs';
import Filters from './Filterbtn';
import Filterbtn2 from './Filterbtn2'; // Import for additional Filter button
import Table from './Table'; // Default Table
import TableTransfer from './TableTransfer'; // Import for Transfer Table
import Pagination from './Pagination';
import { FaLock } from 'react-icons/fa';

const MainContent = ({ rollId }) => {
  const [isTransferMode, setIsTransferMode] = useState(false); // State for Transfer Mode
  const [selectedCurrency, setSelectedCurrency] = useState('PKR'); // State for Currency Selection

  // Toggle between normal and transfer modes
  const handleTransferClick = () => {
    setIsTransferMode((prevMode) => !prevMode); // Toggle transfer mode
  };

  // Function to handle currency selection
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency); // Update the selected currency
  };

  return (
    <div className="main-content1">
      {/* Tabs Section */}
      <Tabs />
      <hr />

      {/* Transfer Button Below Tabs */}
      <div className="d-flex justify-content-start ms-5">
        <button
          className={`btn transferbtn ${isTransferMode ? 'active' : ''}`}
          onClick={handleTransferClick}
        >
          {isTransferMode ? 'Transfers' : 'Transfers'}
        </button>
      </div>

      {/* Container for Filters, Balance, and Table */}
      <div className="ps-lg-4 ps-md-4 pt-2 maincontent-container1 mt-2">
        {/* Filters, Filterbtn2, and Balance Box */}
        <div className="row mb-4 align-items-start">
          <div className="col-md-6 col-12 d-flex flex-column">
            {/* Conditionally render Filterbtn2 if Transfer mode is active */}
            {isTransferMode && (
              <Filterbtn2
               
              />
            )}
            <Filters 
             selectedCurrency={selectedCurrency}
                onCurrencySelect={handleCurrencySelect} // Pass the currency selection handler
                className="my-2"/>
          </div>

          {/* Balance Box on the other side */}
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

        {/* Table and Pagination Container */}
        <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
          {/* Conditionally render the appropriate table */}
          {isTransferMode ? (
            <TableTransfer /> // Show TableTransfer if Transfer mode is active
          ) : (
            <Table rollId={rollId} /> // Show Default Table otherwise
          )}

          {/* Export Button and Pagination */}
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
