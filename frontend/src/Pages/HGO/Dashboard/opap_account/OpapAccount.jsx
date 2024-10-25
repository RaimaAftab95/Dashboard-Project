import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AccSidebar from '../common_components/Accumulativesidebar';
import MainContent from './opapaccountComponents/MainContent';
import { FaBars, FaTimes } from 'react-icons/fa';
import RollIdPrompt from '../common_components/RollIdPrompt';
import { RollIdProvider } from '../common_components/RollIdContext'; // Import the provider

const OpapAccount = () => {
  const navigate = useNavigate();
  const { userType } = useParams(); // Get the user type from the URL
  console.log("User Type:", userType);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [rollId, setRollId] = useState(''); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

   const handleRollIdSubmit = (id) => {
    setRollId(id);
  };
  useEffect(() => {
    if (!userType || (userType !== 'hgo' && userType !== 'monazam')) {
      // Redirect to an error page or a default page if the userType is invalid
      navigate('/');
    }
  }, [userType, navigate]);
  return (
     <RollIdProvider> {/* Wrap everything inside the RollIdProvider */}
    <div className="container-fluid  dashboard-layout m-0 p-0">
      
      <AccSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} rollId={rollId} />

      <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
        {/* Hamburger Menu for mobile screens */}
        <div className="d-md-none d-flex justify-content-between align-items-center sidebar-logo-bg py-3 px-1">
          <button className="btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo pe-5" style={{ height: '40px'}} /> 
        </div>

        <RollIdPrompt onRollIdSubmit={handleRollIdSubmit} />
        <MainContent rollId={rollId}/>
      </div>
    </div>
    </RollIdProvider>
  );
};

export default OpapAccount;
