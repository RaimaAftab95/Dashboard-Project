import React, { useState } from 'react';
import Sidebar from '../common_components/Sidebar';
import MainContent from './monazam_accountComponents/MainContent';
import { FaBars, FaTimes } from 'react-icons/fa';

const MonazamAccount = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid dashboard-layout">
      {/* Overlay Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
        {/* Hamburger Menu for mobile screens */}
        <div className="d-md-none d-flex justify-content-between align-items-center p-3">
          <button className="btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo" style={{ height: '40px' }} /> 
        </div>

        <MainContent />
      </div>
    </div>
  );
};

export default MonazamAccount;
