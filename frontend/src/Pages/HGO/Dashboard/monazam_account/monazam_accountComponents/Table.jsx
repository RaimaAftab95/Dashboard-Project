import React, { useState } from 'react';
import { useRollId } from '../../common_components/RollIdContext';// Import the hook

const Table = () => {
  const [showHGO1, setShowHGO1] = useState(false);
  const [showHGO2, setShowHGO2] = useState(false);

  const toggleHGO1 = () => setShowHGO1(!showHGO1);
  const toggleHGO2 = () => setShowHGO2(!showHGO2);

   const { rollId } = useRollId(); // Get rollId directly from context
  return (
    <div>
     
      <div className="table-responsive">
        <table className="table table-sm">
          <thead>
            <tr>
              <th className="tableheader-txt">Date</th>
              <th className="tableheader-txt">Narration</th>
              <th className="tableheader-txt">Currency</th>
              <th className="tableheader-txt">Amount</th>
              <th className="tableheader-txt">VoucherID</th>
              <th className="tableheader-txt">Status</th>
              {rollId === 'monazam' && <th className="tableheader-txt">Actions</th>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tabledata-txt">01-01-2024</td>
              <td className="tabledata-txt">Payment</td>
              <td className="tabledata-txt">USD</td>
              <td className="tabledata-txt">1000</td>
              <td className="tabledata-txt">V001</td>
              <td className="tabledata-txt">Completed</td>
              {rollId === 'monazam' && (
                <td className="tabledata-txt">
                  <button className="btn btn-sm btn-compact me-2">Approve</button>
                  <button className="btn btn-sm btn-compactreject">Reject</button>
                </td>
              )}
            </tr>
            <tr>
              <td className="tabledata-txt">02-01-2024</td>
              <td className="tabledata-txt">Transfer</td>
              <td className="tabledata-txt">PKR</td>
              <td className="tabledata-txt">5000</td>
              <td className="tabledata-txt">V002</td>
              <td className="tabledata-txt">Pending</td>
              {rollId === 'monazam' && (
                <td className="tabledata-txt">
                  <button className="btn btn-sm me-2 btn-compact">Approve</button>
                  <button className="btn btn-sm btn-compactreject">Reject</button>
                </td>
              )}
            </tr>
          </tbody>
        </table>

     
        <div className="dropdown-section mt-4">
          <div className="flex justify-between items-center">
            {rollId === 'monazam' && (
              <img src="/assets/editsymbol.png" alt="Edit Symbol" className="img-fluid mr-2 edit-icon" />
            )}
            <span className="hgo-text">HGO1</span>
            <button className="text-lg plus-minus-btn" onClick={toggleHGO1}>
              {showHGO1 ? '-' : '+'}
            </button>
          </div>

          {showHGO1 && (
            <table className="table mt-2">
              <thead>
                <tr>
                  <th className="tableheader-txt">Date</th>
                  <th className="tableheader-txt">Narration</th>
                  <th className="tableheader-txt">Currency</th>
                  <th className="tableheader-txt">Amount</th>
                  <th className="tableheader-txt">VoucherID</th>
                  <th className="tableheader-txt">Status</th>
                  {rollId === 'monazam' && <th className="tableheader-txt">Actions</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabledata-txt">03-01-2024</td>
                  <td className="tabledata-txt">Deposit</td>
                  <td className="tabledata-txt">USD</td>
                  <td className="tabledata-txt">1500</td>
                  <td className="tabledata-txt">V003</td>
                  <td className="tabledata-txt">Completed</td>
                  {rollId === 'monazam' && (
                    <td className="tabledata-txt">
                      <button className="btn btn-sm btn-compact me-2">Approve</button>
                      <button className="btn btn-sm btn-compactreject">Reject</button>
                    </td>
                  )}
                </tr>
                <tr>
                  <td className="tabledata-txt">04-01-2024</td>
                  <td className="tabledata-txt">Withdrawal</td>
                  <td className="tabledata-txt">EUR</td>
                  <td className="tabledata-txt">2000</td>
                  <td className="tabledata-txt">V004</td>
                  <td className="tabledata-txt">Failed</td>
                  {rollId === 'monazam' && (
                    <td className="tabledata-txt">
                      <button className="btn btn-sm btn-compact me-2">Approve</button>
                      <button className="btn btn-sm btn-compactreject">Reject</button>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <hr />

      
        <div className="dropdown-section mt-4">
          <div className="flex justify-between items-center">
            {rollId === 'monazam' && (
              <img src="/assets/editsymbol.png" alt="Edit Symbol" className="img-fluid mr-2 edit-icon" />
            )}
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
                  <th className="tableheader-txt">Currency</th>
                  <th className="tableheader-txt">Amount</th>
                  <th className="tableheader-txt">VoucherID</th>
                  <th className="tableheader-txt">Status</th>
                  {rollId === 'monazam' && <th className="tableheader-txt">Actions</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabledata-txt">05-01-2024</td>
                  <td className="tabledata-txt">Payment</td>
                  <td className="tabledata-txt">USD</td>
                  <td className="tabledata-txt">1200</td>
                  <td className="tabledata-txt">V005</td>
                  <td className="tabledata-txt">Completed</td>
                  {rollId === 'monazam' && (
                    <td className="tabledata-txt">
                      <button className="btn btn-sm btn-compact me-2">Approve</button>
                      <button className="btn btn-sm btn-compactreject">Reject</button>
                    </td>
                  )}
                </tr>
                <tr>
                  <td className="tabledata-txt">06-01-2024</td>
                  <td className="tabledata-txt">Transfer</td>
                  <td className="tabledata-txt">PKR</td>
                  <td className="tabledata-txt">2500</td>
                  <td className="tabledata-txt">V006</td>
                  <td className="tabledata-txt">Pending</td>
                  {rollId === 'monazam' && (
                    <td className="tabledata-txt">
                      <button className="btn btn-sm btn-compact me-2">Approve</button>
                      <button className="btn btn-sm btn-compactreject">Reject</button>
                    </td>
                  )}
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
