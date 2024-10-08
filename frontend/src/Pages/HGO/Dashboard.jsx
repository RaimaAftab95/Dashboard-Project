import React from 'react';
import Sidebar from '../../Components/Sidebar';
import MainContent from '../../Components/MainContent';

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
