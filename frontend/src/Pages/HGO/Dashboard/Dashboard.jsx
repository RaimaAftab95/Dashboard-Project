import React from 'react';
import Sidebar from './DashboardComponents/Sidebar';
import MainContent from './DashboardComponents/MainContent';

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
