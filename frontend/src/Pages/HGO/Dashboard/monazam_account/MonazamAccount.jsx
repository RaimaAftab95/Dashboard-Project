import React, { useState } from 'react';
import AccSidebar from '../common_components/Accumulativesidebar';
import MainContent from './monazam_accountComponents/MainContent';
import { FaBars, FaTimes } from 'react-icons/fa';
import RollIdPrompt from '../common_components/RollIdPrompt';


const MonazamAccount = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [rollId, setRollId] = useState(''); // State to store the roll ID

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

   const handleRollIdSubmit = (id) => {
    setRollId(id); // Update the roll ID state
  };

  return (
    <div className="container-fluid  dashboard-layout m-0 p-0">
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

        <MainContent rollId={rollId} />
      </div>
    </div>
  );
};

export default MonazamAccount;
// import React, { useState } from 'react';
// import AccSidebar from '../common_components/Accumulativesidebar';
// import MainContent from './monazam_accountComponents/MainContent';
// import MainContentTransfer from '../monazamAccounttransfer/MonazamAcctransfercomponents/MainContentTransfer';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import RollIdPrompt from '../common_components/RollIdPrompt';

// const MonazamAccount = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isTransferMode, setIsTransferMode] = useState(false); // State to track Transfer mode
//   const [rollId, setRollId] = useState(''); // State to store the roll ID

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const handleRollIdSubmit = (id) => {
//     setRollId(id); // Update the roll ID state
//   };

//   // Function to toggle between MainContent and MainContentTransfer
//   const toggleTransferMode = () => {
//     setIsTransferMode(!isTransferMode);
//   };

//   return (
//     <div className="container-fluid dashboard-layout m-0 p-0">
//       {/* Overlay Sidebar */}
//       <AccSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} rollId={rollId} />

//       {/* Main Content */}
//       <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
//         {/* Hamburger Menu for mobile screens */}
//         <div className="d-md-none d-flex justify-content-between align-items-center sidebar-logo-bg py-3 px-1">
//           <button className="btn" onClick={toggleSidebar}>
//             {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
          
//           <img src="/assets/logo.png" alt="Logo" className="img-fluid logo pe-5" style={{ height: '40px'}} /> 
//         </div>

//         {/* Roll ID Prompt */}
//         <RollIdPrompt onRollIdSubmit={handleRollIdSubmit} />

//         {/* Transfer Button */}
//         <div className="mt-3 ms-4">
//           <button className="btn btn-primary" onClick={toggleTransferMode}>
//             {isTransferMode ? 'Back to Main' : 'Transfer'} {/* Change button text dynamically */}
//           </button>
//         </div>

//         {/* Conditionally render MainContent or MainContentTransfer based on isTransferMode */}
//         {isTransferMode ? (
//           <MainContentTransfer  /> 
//         ) : (
//           <MainContent rollId={rollId} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default MonazamAccount;
