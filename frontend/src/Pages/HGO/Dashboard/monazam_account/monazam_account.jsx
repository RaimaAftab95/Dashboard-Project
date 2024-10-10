import React from 'react';
import Sidebar from '../common_components/Sidebar';
import MainContent from './monazam_accountComponents/MainContent';

const monazam_account = () => {
  return (
    <div className="container-fluid dashboard-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default monazam_account;