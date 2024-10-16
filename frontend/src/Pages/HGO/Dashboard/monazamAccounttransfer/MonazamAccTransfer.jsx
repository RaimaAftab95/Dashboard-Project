import React, { useState } from 'react';
import AccSidebar from '../common_components/Accumulativesidebar';
import MainContentTransfer from './MonazamAcctransfercomponents/MainContentTransfer';
import { FaBars, FaTimes } from 'react-icons/fa';
import RollIdPrompt from '../common_components/RollIdPrompt';

const MonazamAccTransfer = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
   const [rollId, setRollId] = useState(''); // State to store the roll ID
  // const [activeTab, setActiveTab] = useState('/transfer');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
    const handleRollIdSubmit = (id) => {
    setRollId(id); // Update the roll ID state
  };

  return (
    <div className="container-fluid dashboard-layout m-0 p-0">
      {/* Overlay Sidebar */}
      <AccSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} rollId={rollId} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
        {/* Hamburger Menu for mobile screens */}
        <div className="d-md-none d-flex justify-content-between align-items-center sidebar-logo-bg py-3 px-1">
          <button className="btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo pe-5" style={{ height: '40px'}} /> 
        </div>
        
{/* Roll ID Prompt */}
        <RollIdPrompt onRollIdSubmit={handleRollIdSubmit} />
        <MainContentTransfer />
      </div>
    </div>
  );
};

export default MonazamAccTransfer ;

