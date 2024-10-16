import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; 
import Notification from './Notification';

const Tabs = () => {
  const location = useLocation(); 
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBellClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div className="d-flex justify-content-end align-items-center me-2 m-sm-0 m-xsm-0">
      <ul className="nav">
      {/* <li className="nav-item me-2">
          <a
            className={`nav-link tab-link ${activeTab === '/transfer' ? 'active' : ''}`}
            href="/transfer"
          >
            Transfer
          </a>
        </li> */}
        {/* Separator Line */}
        {/* <li className="nav-item">
          <div className="separator" style={{ borderLeft: '2px solid #019440', height: '30px', margin: '0 10px' }}></div>
        </li> */}
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/incoming' ? 'active' : ''}`}
            href="/incoming"
          >
            Incoming
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/outgoing' ? 'active' : ''}`}
            href="/outgoing"
          >
            Outgoing
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/monazamaccount' ? 'active' : ''}`}
            href="/monazamaccount"
          >
            Monazam Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/opap' ? 'active' : ''}`}
            href="/opap"
          >
            OPAP Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/ehajj' ? 'active' : ''}`}
            href="/ehajj"
          >
            E-Hajj Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/merchant' ? 'active' : ''}`}
            href="/merchant"
          >
            Merchant
          </a>
        </li>
      </ul>
      <FaBell size={20} className="ms-3 bell-icon" onClick={handleBellClick} style={{ cursor: 'pointer' }} />
{/* Notification Modal */}
<Notification isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
};

export default Tabs;
