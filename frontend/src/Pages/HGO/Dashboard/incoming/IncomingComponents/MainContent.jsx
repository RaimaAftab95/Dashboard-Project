import React from 'react';
import Tabs from '../../common_components/Tabs';
import Filters from './Filterbtn';
import Table from './Table';
import Pagination from './Pagination';

const MainContent = ({ rollId }) => { // Accept rollId as a prop
  return (
    <div className="mt-2 main-content1">
      <Tabs />

      {/* Container for Filters and Table*/}
      <div className="ps-lg-4 ps-md-4 pt-4 maincontent-container1 mt-2">
        <Filters rollId={rollId} /> {/* Pass rollId to Filters */}
        {/* Container for Table and Pagination */}
        <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
          <Table rollId={rollId}  />
          <div className="d-flex justify-content-end mt-5"> 
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
