import React, { useState } from 'react';
import OutgoingSidebar from '../common_components/OutgoingSidebar'; 
import MainContent from './OutgoingingComponents/MainContent';
import { FaBars, FaTimes } from 'react-icons/fa';
import RollIdPrompt from '../common_components/RollIdPrompt';

const OutgoingDashboard = () => {  // Accept rollId as a prop
  const [isSidebarOpen, setSidebarOpen] = useState(false);
   const [rollId, setRollId] = useState(''); // State to store the roll ID

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

   const handleRollIdSubmit = (id) => {
    setRollId(id); // Update the roll ID state
  };
  

  return (
    <div className="container-fluid dashboard-layout m-0 p-0">
      {/* Overlay Sidebar */}
      <OutgoingSidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        rollId={rollId}  // Pass the rollId prop to OutgoingSidebar
      />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
        {/* Hamburger Menu for mobile screens */}
        <div className="d-md-none d-flex justify-content-between align-items-center sidebar-logo-bg py-3 px-1">
          <button className="btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo pe-5" style={{ height: '40px' }} /> 
        </div>

        {/* Roll ID Prompt */}
        <RollIdPrompt onRollIdSubmit={handleRollIdSubmit} />

        <MainContent rollId={rollId} />
      </div>
    </div>
  );
};

export default OutgoingDashboard;
