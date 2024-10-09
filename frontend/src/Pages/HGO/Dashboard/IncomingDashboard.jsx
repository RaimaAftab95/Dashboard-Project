import React from 'react';
import Sidebar from '../Dashboard/IncomingDashboardComponents/Sidebar';
import MainContent from '../Dashboard/IncomingDashboardComponents/MainContent';

const IncomingDashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default IncomingDashboard;