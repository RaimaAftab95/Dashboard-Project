import React from 'react';
import Tabs from '../../common_components/Tabs';
import Table from './Table';

const MainContent = () => {
  return (
    <div className="mt-2 main-content flex-grow-1">
      <Tabs />
      {/* Container for Filters and Table*/}
      <div className="ps-4 pt-4 maincontent-container mt-2">
      {/* Container for Table and Pagination */}
      <div className="table-pagination-container shadow-sm p-3 m-3 bg-white rounded">
        <Table />
      </div>
    </div>
    </div>
  );
};

export default MainContent;
