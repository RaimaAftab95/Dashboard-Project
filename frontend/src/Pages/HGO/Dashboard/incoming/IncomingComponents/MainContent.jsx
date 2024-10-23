// import React from 'react';
// import Tabs from '../../common_components/Tabs';
// import Filters from './Filterbtn';
// import Table from './Table';
// import Pagination from './Pagination';

// const MainContent = ({ rollId }) => { 
//   return (
//     <div className="mt-2 main-content1">
//       <Tabs />

//       <div className="ps-lg-4 ps-md-4 pt-4 maincontent-container1 mt-2">
//         <Filters rollId={rollId} /> 
     
//         <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
//           <Table rollId={rollId}  />
//           <div className="d-flex justify-content-end mt-5"> 
//             <Pagination />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContent;

import React from 'react';
import Tabs from '../../common_components/Tabs';
import Filters from './Filterbtn';
import Table from './Table';
import Pagination from './Pagination';
import { useRollId } from '../../common_components/RollIdContext'; // Import the useRollId hook

const MainContent = () => {

   const { rollId } = useRollId(); // Get rollId directly from context
  return (
    <div className="mt-2 main-content1">
      <Tabs />
      <div className="ps-lg-4 ps-md-4 pt-4 maincontent-container1 mt-2">
        <Filters /> 
        <div className="table-pagination-container shadow-sm p-3 m-lg-3 bg-white rounded">
          <Table />
          <div className="d-flex justify-content-end mt-5"> 
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
