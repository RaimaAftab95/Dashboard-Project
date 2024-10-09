import React from 'react';
import Sidebar from './OutgoingingDashboardComponents/Sidebar';
import MainContent from './OutgoingingDashboardComponents/MainContent';

const OutgoingDashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default OutgoingDashboard;