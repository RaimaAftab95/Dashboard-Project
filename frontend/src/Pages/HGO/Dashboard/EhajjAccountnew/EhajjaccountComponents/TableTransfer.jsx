import React, { useState } from 'react';
import { useRollId } from '../../common_components/RollIdContext';// Import the hook

const TableTransfer = () => {
  const [showHGO1, setShowHGO1] = useState(false);
  const [showHGO2, setShowHGO2] = useState(false);
  const [showHGO3, setShowHGO3] = useState(false);

  const toggleHGO1 = () => setShowHGO1(!showHGO1);
  const toggleHGO2 = () => setShowHGO2(!showHGO2);
  const toggleHGO3 = () => setShowHGO3(!showHGO3);
 const { rollId } = useRollId(); // Get rollId from context
 
  return (
    <div>
     
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="tableheader-txt">Voucher ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tabledata-txt">V001</td>
            </tr>
          </tbody>
        </table>

    
        <div className="dropdown-section mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className="hgo-text">Alexander</span>
            <button className="text-lg plus-minus-btn" onClick={toggleHGO1}>
              {showHGO1 ? '-' : '+'}
            </button>
          </div>

          {showHGO1 && (
            <table className="table mt-2">
              <thead>
                <tr>
                  <th className="tableheader-txt">Companies</th>
                  <th className="tableheader-txt">Total Balance</th>
                  <th className="tableheader-txt">Shares</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabledata-txt">Company A</td>
                  <td className="tabledata-txt">7500</td>
                  <td className="tabledata-txt">50</td>
                </tr>
                <tr>
                  <td className="tabledata-txt">Company B</td>
                  <td className="tabledata-txt">5500</td>
                  <td className="tabledata-txt">30</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <hr />

      
        <div className="dropdown-section mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className="hgo-text">Alexander</span>
            <button className="text-lg plus-minus-btn" onClick={toggleHGO2}>
              {showHGO2 ? '-' : '+'}
            </button>
          </div>

          {showHGO2 && (
            <table className="table mt-2">
              <thead>
                <tr>
                  <th className="tableheader-txt">Companies</th>
                  <th className="tableheader-txt">Total Balance</th>
                  <th className="tableheader-txt">Shares</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabledata-txt">Company C</td>
                  <td className="tabledata-txt">6700</td>
                  <td className="tabledata-txt">40</td>
                </tr>
                <tr>
                  <td className="tabledata-txt">Company D</td>
                  <td className="tabledata-txt">4200</td>
                  <td className="tabledata-txt">20</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <hr />

       
        <div className="dropdown-section mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className="hgo-text">Alexander</span>
            <button className="text-lg plus-minus-btn" onClick={toggleHGO3}>
              {showHGO3 ? '-' : '+'}
            </button>
          </div>

          {showHGO3 && (
            <table className="table mt-2">
              <thead>
                <tr>
                  <th className="tableheader-txt">Companies</th>
                  <th className="tableheader-txt">Total Balance</th>
                  <th className="tableheader-txt">Shares</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabledata-txt">Company E</td>
                  <td className="tabledata-txt">8300</td>
                  <td className="tabledata-txt">60</td>
                </tr>
                <tr>
                  <td className="tabledata-txt">Company F</td>
                  <td className="tabledata-txt">7000</td>
                  <td className="tabledata-txt">35</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableTransfer;
