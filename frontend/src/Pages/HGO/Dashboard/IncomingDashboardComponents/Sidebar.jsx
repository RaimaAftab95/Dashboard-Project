// import React from 'react';
// import { FaPlus } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="sidebar dashboard-sidebar-bg d-flex flex-column">

//       {/* Logo */}
//       <div className="text-center mb-4 sidebar-logo-bg">
//         <img src="/assets/logo.png" alt="Logo" className="img-fluid mb-3" />
//       </div>
      
//       {/* Buttons */}
//       <div className="mb-3">
//         <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
//           Incoming Requests <FaPlus className='plus-icon' />
//         </button>
//       </div>
//       <div className="mb-3">
//         <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
//           Outgoing Requests <FaPlus className='plus-icon' />
//         </button>
//       </div>
//       <div className="mb-3">
//         <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
//           <div className="d-flex flex-column align-items-start">
//             <span>Merchant Transfer</span>
//             <span>Request</span>
//           </div>
//           <FaPlus className='plus-icon' />
//         </button>
//       </div>
      
//       {/* User Info */}
//       <div className="mt-auto d-flex align-items-center justify-content-center mb-3">
//         <img
//           src="/assets/Ellipse 14.png"
//           alt="User"
//           className="user-circle me-2"
//         />
//         <div>
//           <div className="fw-bold lightgreen-txt">Tim Cook</div>
//           <div className="lightgreen-txt">timcook@force.com</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';
// import IncomingRequest from './IncomingRequest';  // Import the modal component

// const Sidebar = () => {
//   const [isIncomingModalOpen, setIncomingModalOpen] = useState(false);

//   const openIncomingModal = (e) => {
//     e.preventDefault();
//     setIncomingModalOpen(true);
//   };

//   const closeIncomingModal = () => {
//     setIncomingModalOpen(false);
//   };

//   return (
//     <div className="sidebar dashboard-sidebar-bg d-flex flex-column">

//       {/* Logo */}
//       <div className="text-center mb-4 sidebar-logo-bg">
//         <img src="/assets/logo.png" alt="Logo" className="img-fluid mb-3" />
//       </div>
      
//       {/* Buttons */}
//       <div className="mb-3">
//         <button 
//           className="btn label-text w-100 d-flex justify-content-between align-items-center"
//           onClick={openIncomingModal}  // Open modal on click
//         >
//           Incoming Requests <FaPlus className='plus-icon' />
//         </button>
//       </div>
//       <div className="mb-3">
//         <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
//           Outgoing Requests <FaPlus className='plus-icon' />
//         </button>
//       </div>
//       <div className="mb-3">
//         <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
//           <div className="d-flex flex-column align-items-start">
//             <span>Merchant Transfer</span>
//             <span>Request</span>
//           </div>
//           <FaPlus className='plus-icon' />
//         </button>
//       </div>
      
//       {/* User Info */}
//       <div className="mt-auto d-flex align-items-center justify-content-center mb-3">
//         <img
//           src="/assets/Ellipse 14.png"
//           alt="User"
//           className="user-circle me-2"
//         />
//         <div>
//           <div className="fw-bold lightgreen-txt">Tim Cook</div>
//           <div className="lightgreen-txt">timcook@force.com</div>
//         </div>
//       </div>

//       {/* IncomingRequest Modal */}
//       <IncomingRequest isOpen={isIncomingModalOpen} onClose={closeIncomingModal} />
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import IncomingRequest from './IncomingRequest';  // Import the IncomingRequest modal component
import OutgoingRequest from './OutgoingRequest';  // Import the OutgoingRequest modal component
import MerchantRequest from './MerchantRequest';  // Import the MerchantRequest modal component

const Sidebar = () => {
  const [isIncomingModalOpen, setIncomingModalOpen] = useState(false);
  const [isOutgoingModalOpen, setOutgoingModalOpen] = useState(false);
  const [isMerchantModalOpen, setMerchantModalOpen] = useState(false);

  // Handlers for Incoming modal
  const openIncomingModal = (e) => {
    e.preventDefault();
    setIncomingModalOpen(true);
  };
  const closeIncomingModal = () => {
    setIncomingModalOpen(false);
  };

  // Handlers for Outgoing modal
  const openOutgoingModal = (e) => {
    e.preventDefault();
    setOutgoingModalOpen(true);
  };
  const closeOutgoingModal = () => {
    setOutgoingModalOpen(false);
  };

  // Handlers for Merchant modal
  const openMerchantModal = (e) => {
    e.preventDefault();
    setMerchantModalOpen(true);
  };
  const closeMerchantModal = () => {
    setMerchantModalOpen(false);
  };

  return (
    <div className="sidebar dashboard-sidebar-bg d-flex flex-column">

      {/* Logo */}
      <div className="text-center mb-4 sidebar-logo-bg">
        <img src="/assets/logo.png" alt="Logo" className="img-fluid mb-3" />
      </div>
      
      {/* Buttons */}
      <div className="mb-3">
        <button 
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openIncomingModal}  // Open IncomingRequest modal on click
        >
          Incoming Requests <FaPlus className='plus-icon' />
        </button>
      </div>
      <div className="mb-3">
        <button 
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openOutgoingModal}  // Open OutgoingRequest modal on click
        >
          Outgoing Requests <FaPlus className='plus-icon' />
        </button>
      </div>
      <div className="mb-3">
        <button 
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openMerchantModal}  // Open MerchantRequest modal on click
        >
          <div className="d-flex flex-column align-items-start">
            <span>Merchant Transfer</span>
            <span>Request</span>
          </div>
          <FaPlus className='plus-icon' />
        </button>
      </div>
      
      {/* User Info */}
      <div className="mt-auto d-flex align-items-center justify-content-center mb-3">
        <img
          src="/assets/Ellipse 14.png"
          alt="User"
          className="user-circle me-2"
        />
        <div>
          <div className="fw-bold lightgreen-txt">Tim Cook</div>
          <div className="lightgreen-txt">timcook@force.com</div>
        </div>
      </div>

      {/* IncomingRequest Modal */}
      <IncomingRequest isOpen={isIncomingModalOpen} onClose={closeIncomingModal} />

      {/* OutgoingRequest Modal */}
      <OutgoingRequest isOpen={isOutgoingModalOpen} onClose={closeOutgoingModal} />

      {/* MerchantRequest Modal */}
      <MerchantRequest isOpen={isMerchantModalOpen} onClose={closeMerchantModal} />
    </div>
  );
};

export default Sidebar;
