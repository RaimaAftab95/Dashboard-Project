import React from 'react';
import Sidebar from '../common_components/Sidebar';
import MainContent from './OutgoingingComponents/MainContent';

const OutgoingDashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default OutgoingDashboard;