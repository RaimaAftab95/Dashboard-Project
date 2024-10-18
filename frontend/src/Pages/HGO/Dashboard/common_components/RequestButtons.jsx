import React from 'react';
import { FaPlus } from 'react-icons/fa';

const RequestButtons = ({ openIncomingModal, openOutgoingModal, openMerchantModal }) => {
  return (
    <>
      
      <div className="mb-3">
        <button
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openIncomingModal}
        >
          Incoming Requests <FaPlus className="plus-icon" />
        </button>
      </div>

      <div className="mb-3">
        <button
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={openOutgoingModal}
        >
          Outgoing Requests <FaPlus className="plus-icon" />
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
          <FaPlus className="plus-icon" />
        </button>
      </div>
    </>
  );
};

export default RequestButtons;
