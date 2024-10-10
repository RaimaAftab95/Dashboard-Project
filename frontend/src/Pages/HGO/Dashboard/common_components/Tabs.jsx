import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import Notification from './Notification';

const Tabs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBellClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="d-flex justify-content-end align-items-center me-2">
      <ul className="nav">
        {/* Transfer Button */}
        <li className="nav-item me-2">
          <a className="nav-link tab-link" aria-current="page" href="#">Transfer</a>
        </li>
        {/* Separator Line */}
        <li className="nav-item">
          <div className="separator" style={{ borderLeft: '2px solid #019440', height: '30px', margin: '0 10px' }}></div>
        </li>
        {/* Existing Tabs */}
        <li className="nav-item">
          <a className="nav-link tab-link active" aria-current="page" href="#">
            Incoming
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">Outgoing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">Monazam Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">OPAP Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">E-Hajj Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">Merchant</a>
        </li>
      </ul>
      <FaBell size={20} className="ms-3" onClick={handleBellClick} style={{ cursor: 'pointer' }} />

      {/* Notification Modal */}
      <Notification isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Tabs;
