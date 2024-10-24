import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import RollIdPrompt from '../common_components/RollIdPrompt';
import Sidebar from '../common_components/Sidebar';
import MainContent from './IncomingComponents/MainContent';
import { RollIdProvider } from '../common_components/RollIdContext'; // Import the provider

const IncomingDashboard = () => {
  const navigate = useNavigate();
  const { userType } = useParams(); // Get the user type from the URL
  console.log("User Type:", userType);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    if (!userType || (userType !== 'hgo' && userType !== 'monazam')) {
      // Redirect to an error page or a default page if the userType is invalid
      navigate('/');
    }
  }, [userType, navigate]);
  return (
    <RollIdProvider> {/* Wrap everything inside the RollIdProvider */}
      <div className="container-fluid dashboard-layout m-0 p-0">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
          {/* Hamburger Menu for mobile screens */}
          <div className="d-md-none d-flex justify-content-between align-items-center sidebar-logo-bg py-3 px-1">
            <button className="btn" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <img src="/assets/logo.png" alt="Logo" className="img-fluid logo pe-5" style={{ height: '40px' }} />
          </div>

          {/* RollIdPrompt to set the roll ID */}
          <RollIdPrompt />

          {/* Main content */}
          <MainContent />
        </div>
      </div>
    </RollIdProvider>
  );
};

export default IncomingDashboard;
