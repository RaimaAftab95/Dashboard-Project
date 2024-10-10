import React from 'react';
import Sidebar from '../common_components/Sidebar';
import MainContent from './IncomingComponents/MainContent';

const IncomingDashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default IncomingDashboard;