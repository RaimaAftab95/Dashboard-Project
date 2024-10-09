import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import MerchantRequest from './MerchantRequest';

const Tabs = () => {
  const [isIncomingModalOpen, setIncomingModalOpen] = useState(false); 

  const openIncomingModal = (e) => {
    e.preventDefault(); 
    setIncomingModalOpen(true);
  };

  const closeIncomingModal = () => {
    setIncomingModalOpen(false); 
  };

  return (
    <div className="d-flex justify-content-end mb-4 align-items-center">
      <ul className="nav">
        <li className="nav-item">
          <a 
            className="nav-link tab-link" 
            // aria-current="page" 
            href="#" 
            // onClick={openIncomingModal} 
          >
            Incoming
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">Outgoing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">Monazama Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">OPAP Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">E-Hajj Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link active"
            aria-current="page" 
            href="#" 
            onClick={openIncomingModal}
           >
            Merchant
            </a>
        </li>
      </ul>
      <FaBell size={20} className="ms-3" />
      <MerchantRequest isOpen={isIncomingModalOpen} onClose={closeIncomingModal} />
    </div>
  );
};

export default Tabs;
