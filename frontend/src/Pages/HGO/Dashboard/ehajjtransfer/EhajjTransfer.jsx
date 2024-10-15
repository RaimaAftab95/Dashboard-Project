import React, { useState } from 'react';
import Sidebar from '../common_components/Sidebar';
import MainContentTransfer from './ehajjtransfercomponents/MainContentTransfer';
import { FaBars, FaTimes } from 'react-icons/fa';

const EhajjTransfer = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState('/transfer');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid dashboard-layout m-0 p-0">
      {/* Overlay Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
        {/* Hamburger Menu for mobile screens */}
        <div className="d-md-none d-flex justify-content-between align-items-center sidebar-logo-bg py-3 px-1">
          <button className="btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo pe-5" style={{ height: '40px'}} /> 
        </div>

        <MainContentTransfer />
      </div>
    </div>
  );
};

export default EhajjTransfer;

