import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import IncomingRequest from './IncomingRequest';
import OutgoingRequest from './OutgoingRequest';
import MerchantRequest from './MerchantRequest';

const Sidebar = ({ isOpen, toggleSidebar }) => {
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
    <>
      {/* Sidebar with Drawer Effect */}
      <div className={`sidebar drawer-sidebar d-flex flex-column ${isOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between align-items-center mb-4 sidebar-logo-bg">
          <img src="/assets/logo.png" alt="Logo" className="img-fluid mb-2 logo-img" />
          {/* Close button for mobile view */}
          <button className="btn close-btn d-md-none" onClick={toggleSidebar}>
            <FaTimes size={15} />
          </button>
        </div>

        {/* Button for Incoming Requests */}
        <div className="mb-3">
          <button
            className="btn label-text w-100 d-flex justify-content-between align-items-center"
            onClick={openIncomingModal}
          >
            Incoming Requests <FaPlus className="plus-icon" />
          </button>
        </div>

        {/* Button for Outgoing Requests */}
        <div className="mb-3">
          <button
            className="btn label-text w-100 d-flex justify-content-between align-items-center"
            onClick={openOutgoingModal}
          >
            Outgoing Requests <FaPlus className="plus-icon" />
          </button>
        </div>

        {/* Button for Merchant Transfer Request */}
        <div className="mb-3">
          <button
            className="btn label-text w-100 d-flex justify-content-between align-items-center"
            onClick={openMerchantModal}
          >
            <div className="d-flex flex-column align-items-start">
              <span>Merchant Transfer</span>
              <span>Request</span>
            </div>
            <FaPlus className="plus-icon" />
          </button>
        </div>

        {/* User Profile Section - Ensure it's at the bottom */}
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
      </div>

      {/* Overlay Effect */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Modals */}
      <IncomingRequest isOpen={isIncomingModalOpen} onClose={closeIncomingModal} />
      <OutgoingRequest isOpen={isOutgoingModalOpen} onClose={closeOutgoingModal} />
      <MerchantRequest isOpen={isMerchantModalOpen} onClose={closeMerchantModal} />
    </>
  );
};

export default Sidebar;
