import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import IncomingRequest from './IncomingRequest'; 
import OutgoingRequest from './OutgoingRequest'; 
import MerchantRequest from './MerchantRequest';

const Sidebar = () => {
  const [isIncomingModalOpen, setIncomingModalOpen] = useState(false);
  const [isOutgoingModalOpen, setOutgoingModalOpen] = useState(false);
  const [isMerchantModalOpen, setMerchantModalOpen] = useState(false);

  const openIncomingModal = (e) => {
    e.preventDefault();
    setIncomingModalOpen(true);
  };
  const closeIncomingModal = () => {
    setIncomingModalOpen(false);
  };

  const openOutgoingModal = (e) => {
    e.preventDefault();
    setOutgoingModalOpen(true);
  };
  const closeOutgoingModal = () => {
    setOutgoingModalOpen(false);
  };

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
        <img src="/assets/logo.png" alt="Logo" className="img-fluid mb-2" />
      </div>
      
      {/* Buttons */}
      <div className="mb-3">
        <button 
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openIncomingModal} 
        >
          Incoming Requests <FaPlus className='plus-icon' />
        </button>
      </div>
      <div className="mb-3">
        <button 
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openOutgoingModal}  
        >
          Outgoing Requests <FaPlus className='plus-icon' />
        </button>
      </div>
      <div className="mb-3">
        <button 
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openMerchantModal}  
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

      <IncomingRequest isOpen={isIncomingModalOpen} onClose={closeIncomingModal} />
      <OutgoingRequest isOpen={isOutgoingModalOpen} onClose={closeOutgoingModal} />
      <MerchantRequest isOpen={isMerchantModalOpen} onClose={closeMerchantModal} />
    </div>
  );
};

export default Sidebar;
