import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import IncomingRequest from './IncomingRequest';
import OutgoingRequest from './OutgoingRequest';
import MerchantRequest from './MerchantRequest';
import RequestButtons from './RequestButtons';
import MonazamSidebarBtns from './MonazamSidebarBtns';
import { useRollId } from './RollIdContext'; // Import the hook

const OutgoingSidebar = ({ isOpen, toggleSidebar }) => {

  const { rollId } = useRollId(); // Use the context to get rollId
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
     
      <div className={`sidebar drawer-sidebar d-flex flex-column ${isOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between align-items-center mb-4 sidebar-logo-bg">
          <img src="/assets/logo.png" alt="Logo" className="img-fluid mb-2 logo-img" />
        
          <button className="btn close-btn d-md-none" onClick={toggleSidebar}>
            <FaTimes size={15} />
          </button>
        </div>

        {rollId === 'hgo' && (
          <RequestButtons
            openIncomingModal={openIncomingModal}
            openOutgoingModal={openOutgoingModal}
            openMerchantModal={openMerchantModal}
          />
        )}
        {rollId === 'monazam' && <MonazamSidebarBtns />}

       
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

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

    
      <IncomingRequest isOpen={isIncomingModalOpen} onClose={closeIncomingModal} />
      <OutgoingRequest isOpen={isOutgoingModalOpen} onClose={closeOutgoingModal} />
      <MerchantRequest isOpen={isMerchantModalOpen} onClose={closeMerchantModal} />
    </>
  );
};

export default OutgoingSidebar;
