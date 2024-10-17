// import React from 'react';
// import Tabs from '../../common_components/Tabs';
// import Filters from './Filterbtn';
// import Filterbtnpkrusd from "./Filterbtnpkrusd";
// import TableTransfer from './TableTransfer';
// import Pagination from './Pagination';
// import { FaLock } from 'react-icons/fa';

// const MainContent = () => {
//   return (
//     <div className="mt-2 main-content1">
//       {/* Tabs Section */}
//       <Tabs />
//  {/* Transfer Button Above Main Content */}
//         <div className="">
//           <button className="btn outline-none bg-none ms-5">Transfer</button>
//         </div>
         
//       {/* Container for Filters, Balance, and Table */}
//       <div className="ps-lg-4 ps-md-4 pt-2 maincontent-container1 mt-2">
//         {/* Filters and Balance Box */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           {/* Filter Buttons */}
//           <Filters />
// <Filterbtnpkrusd/>
//           {/* Balance Box */}
//           <div className="balance-box ms-auto d-flex align-items-center p-3 me-3 p-sm-1 m-sm-1">
//             <div>
//               <div className="balance-txt">Balance</div>
//               <div className="amount-txt">PKR 10,000,0</div>
//             </div>
//           </div>
//         </div>

//         {/* Container for Table and Pagination */}
//         <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
//           <TableTransfer/>

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




import React from 'react';
import Tabs from '../../common_components/Tabs';
import Filters from './Filterbtn';
import Filterbtnpkrusd from "./Filterbtnpkrusd";
import TableTransfer from './TableTransfer';
import Pagination from './Pagination';
import { FaLock } from 'react-icons/fa';

const MainContentTransfer = () => {
  return (
    <div className="mt-2 main-content1">
      {/* Tabs Section */}
      <Tabs />
      {/* Container for Filters, Balance, and Table */}
      <div className="ps-lg-4 ps-md-4 pt-2 maincontent-container1 mt-2">
        {/* Filters and Balance Box */}
        <div className="row mb-4">
          {/* Filter Buttons */}
          <div className="col-md-6 col-12">
            <Filters />
            <Filterbtnpkrusd className="mt-2" /> {/* Adds margin between the two buttons */}
          </div>

          {/* Balance Box */}
          <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-start align-items-center mt-3 mt-md-0">
            <div className="balance-box p-3 p-sm-1 m-sm-1">
              <div>
                <div className="balance-txt">Balance</div>
                <div className="amount-txt">PKR 10,000,0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Container for Table and Pagination */}
        <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
          <TableTransfer />

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

export default MainContentTransfer;


