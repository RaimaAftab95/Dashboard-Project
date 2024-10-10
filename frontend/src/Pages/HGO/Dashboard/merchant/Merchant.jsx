import React from 'react';
import Sidebar from '../common_components/Sidebar';
import MainContent from './MerchantComponents/MainContent';

const MerchantDashboard = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default MerchantDashboard;