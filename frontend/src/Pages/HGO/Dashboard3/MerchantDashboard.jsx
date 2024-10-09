import React from 'react';
import Sidebar from '../Dashboard3/MerchantDashboardComponents/Sidebar';
import MainContent from '../Dashboard3/MerchantDashboardComponents/MainContent';

const MerchantDashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default MerchantDashboard;