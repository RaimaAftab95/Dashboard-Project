import React, { useState } from 'react';

const Table = () => {
  const [showHGO1, setShowHGO1] = useState(false);
  const [showHGO2, setShowHGO2] = useState(false);

  const toggleHGO1 = () => setShowHGO1(!showHGO1);
  const toggleHGO2 = () => setShowHGO2(!showHGO2);

  return (
    <div>
      {/* Main Table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="tableheader-txt">Date</th>
              <th className="tableheader-txt">Narration</th>
              <th className="tableheader-txt">Debit</th>
              <th className="tableheader-txt">Credit</th>
              <th className="tableheader-txt">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tabledata-txt">01-01-2024</td>
              <td className="tabledata-txt">Payment</td>
              <td className="tabledata-txt">-</td>
              <td className="tabledata-txt">1000</td>
              <td className="tabledata-txt">1000</td>
            </tr>
            <tr>
              <td className="tabledata-txt">02-01-2024</td>
              <td className="tabledata-txt">Transfer</td>
              <td className="tabledata-txt">5000</td>
              <td className="tabledata-txt">-</td>
              <td className="tabledata-txt">6000</td>
            </tr>
          </tbody>
        </table>

        {/* HGO1 Section */}
        <div className="dropdown-section mt-4">
          <div className="flex justify-between items-center">
            <span className="hgo-text">HGO1</span>
            <button 
              className="text-lg plus-minus-btn"
              onClick={toggleHGO1}>
              {showHGO1 ? '-' : '+'}
            </button>
          </div>

          {showHGO1 && (
            <table className="table mt-2">
              <thead>
                <tr>
                  <th className="tableheader-txt">Date</th>
                  <th className="tableheader-txt">Narration</th>
                  <th className="tableheader-txt">Debit</th>
                  <th className="tableheader-txt">Credit</th>
                  <th className="tableheader-txt">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabledata-txt">03-01-2024</td>
                  <td className="tabledata-txt">Deposit</td>
                  <td className="tabledata-txt">-</td>
                  <td className="tabledata-txt">1500</td>
                  <td className="tabledata-txt">7500</td>
                </tr>
                <tr>
                  <td className="tabledata-txt">04-01-2024</td>
                  <td className="tabledata-txt">Withdrawal</td>
                  <td className="tabledata-txt">2000</td>
                  <td className="tabledata-txt">-</td>
                  <td className="tabledata-txt">5500</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <hr></hr>

        {/* HGO2 Section */}
        <div className="dropdown-section mt-4">
          <div className="flex justify-between items-center">
            <span className="hgo-text">HGO2</span>
            <button className="text-lg plus-minus-btn" onClick={toggleHGO2}>
              {showHGO2 ? '-' : '+'}
            </button>
          </div>

          {showHGO2 && (
            <table className="table mt-2">
              <thead>
                <tr>
                  <th className="tableheader-txt">Date</th>
                  <th className="tableheader-txt">Narration</th>
                  <th className="tableheader-txt">Debit</th>
                  <th className="tableheader-txt">Credit</th>
                  <th className="tableheader-txt">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabledata-txt">05-01-2024</td>
                  <td className="tabledata-txt">Payment</td>
                  <td className="tabledata-txt">-</td>
                  <td className="tabledata-txt">1200</td>
                  <td className="tabledata-txt">6700</td>
                </tr>
                <tr>
                  <td className="tabledata-txt">06-01-2024</td>
                  <td className="tabledata-txt">Transfer</td>
                  <td className="tabledata-txt">2500</td>
                  <td className="tabledata-txt">-</td>
                  <td className="tabledata-txt">4200</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
