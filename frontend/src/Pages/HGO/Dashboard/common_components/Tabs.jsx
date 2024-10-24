import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Notification from './Notification';

const Tabs = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); // For handling logout
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userType, setUserType] = useState(''); // To store user type

  // Fetch user type from localStorage on component mount
  useEffect(() => {
    const storedUserType = localStorage.getItem('user_Type'); // Retrieve user_type from localStorage
    setUserType(storedUserType); // Set user type
    setActiveTab(location.pathname); // Set the active tab based on the current route
  }, [location]);

  const handleBellClick = () => {
    setIsModalOpen(true); // Show notification modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close notification modal
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    navigate('/'); // Redirect to login page
  };
  return (
    <div className="d-flex justify-content-end align-items-center me-2 m-sm-0 m-xsm-0">
      <ul className="nav">
      
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/incoming' ? 'active' : ''}`}
            href={`/incoming/${userType.toLowerCase()}`}
          >
            Incoming
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/outgoing' ? 'active' : ''}`}
            href={`/outgoing/${userType.toLowerCase()}`}
          >
            Outgoing
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/monazamaccount' ? 'active' : ''}`}
            href={`/monazamaccount/${userType.toLowerCase()}`}
          >
            Monazam Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/opap' ? 'active' : ''}`}
            href={`/opap/${userType.toLowerCase()}`}
          >
            OPAP Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/ehajj' ? 'active' : ''}`}
            href={`/ehajj/${userType.toLowerCase()}`}
          >
            E-Hajj Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link tab-link ${activeTab === '/merchant' ? 'active' : ''}`}
            href={`/merchant/${userType.toLowerCase()}`}
          >
            Merchant
          </a>
        </li>
        <li className="nav-item">
          <button
            className="nav-link tab-link"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
      <FaBell size={20} className="ms-3 bell-icon" onClick={handleBellClick} style={{ cursor: 'pointer' }} />

<Notification isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
};

export default Tabs;
