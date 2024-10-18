import React, { useState } from 'react';
import OutgoingSidebar from '../common_components/OutgoingSidebar'; 
import MainContent from './OutgoingingComponents/MainContent';
import { FaBars, FaTimes } from 'react-icons/fa';
import RollIdPrompt from '../common_components/RollIdPrompt';

const OutgoingDashboard = () => {  
  const [isSidebarOpen, setSidebarOpen] = useState(false);
   const [rollId, setRollId] = useState(''); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

   const handleRollIdSubmit = (id) => {
    setRollId(id);
  };
  

  return (
    <div className="container-fluid dashboard-layout m-0 p-0">
     
      <OutgoingSidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        rollId={rollId} 
      />

      <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
        {/* Hamburger Menu for mobile screens */}
        <div className="d-md-none d-flex justify-content-between align-items-center sidebar-logo-bg py-3 px-1">
          <button className="btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo pe-5" style={{ height: '40px' }} /> 
        </div>

        <RollIdPrompt onRollIdSubmit={handleRollIdSubmit} />

        <MainContent rollId={rollId} />
      </div>
    </div>
  );
};

export default OutgoingDashboard;
