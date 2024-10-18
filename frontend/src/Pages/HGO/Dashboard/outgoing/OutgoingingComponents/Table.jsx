import React from 'react';

const Table = ({ rollId }) => {
  const isMonazam = rollId === 'monazam';

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {isMonazam && <th className="tableheader-txt">HGO Name</th>}
            <th className="tableheader-txt">Date</th>
            <th className="tableheader-txt">Narration</th>
            <th className="tableheader-txt">Currency</th>
            <th className="tableheader-txt">Amount</th>
            {isMonazam && <th className="tableheader-txt">Actions</th>}
            {!isMonazam && <th className="tableheader-txt">Status</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            {isMonazam && <td className="tabledata-txt">John Doe</td>} 
            <td className="tabledata-txt">01-01-2024</td>
            <td className="tabledata-txt">Monazam to OPAP transfer</td>
            <td className="tabledata-txt">USD</td>
            <td className="tabledata-txt">1000</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm approved-btn me-2">Approved</button>
                <button className="btn btn-sm rejectbtn">Rejected</button>
              </td>
            )}
            {!isMonazam && <td className="tabledata-txt">Done</td>}
          </tr>
          <tr>
            {isMonazam && <td className="tabledata-txt">Jane Smith</td>} 
            <td className="tabledata-txt">02-01-2024</td>
            <td className="tabledata-txt">OPAP to E Hajj transfer</td>
            <td className="tabledata-txt">PKR</td>
            <td className="tabledata-txt">5000</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm approved-btn me-2">Approved</button>
                <button className="btn btn-sm rejectbtn">Rejected</button>
              </td>
            )}
            {!isMonazam && <td className="tabledata-txt">Pending</td>}
          </tr>
          <tr>
            {isMonazam && <td className="tabledata-txt">John Doe</td>} 
            <td className="tabledata-txt">03-01-2024</td>
            <td className="tabledata-txt">Monazam to OPAP transfer</td>
            <td className="tabledata-txt">USD</td>
            <td className="tabledata-txt">1500</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm approved-btn me-2">Approved</button>
                <button className="btn btn-sm rejectbtn">Rejected</button>
              </td>
            )}
            {!isMonazam && <td className="tabledata-txt">Done</td>}
          </tr>
          <tr>
            {isMonazam && <td className="tabledata-txt">Jane Smith</td>} 
            <td className="tabledata-txt">04-01-2024</td>
            <td className="tabledata-txt">OPAP to E Hajj transfer</td>
            <td className="tabledata-txt">EUR</td>
            <td className="tabledata-txt">2000</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm approved-btn me-2">Approved</button>
                <button className="btn btn-sm rejectbtn">Rejected</button>
              </td>
            )}
            {!isMonazam && <td className="tabledata-txt">Pending</td>}
          </tr>
          <tr>
            {isMonazam && <td className="tabledata-txt">John Doe</td>} 
            <td className="tabledata-txt">05-01-2024</td>
            <td className="tabledata-txt">OPAP to E Hajj transfer</td>
            <td className="tabledata-txt">USD</td>
            <td className="tabledata-txt">1200</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm approved-btn me-2">Approved</button>
                <button className="btn btn-sm rejectbtn">Rejected</button>
              </td>
            )}
            {!isMonazam && <td className="tabledata-txt">Done</td>}
          </tr>
          <tr>
            {isMonazam && <td className="tabledata-txt">Jane Smith</td>} 
            <td className="tabledata-txt">06-01-2024</td>
            <td className="tabledata-txt">OPAP to E Hajj transfer</td>
            <td className="tabledata-txt">PKR</td>
            <td className="tabledata-txt">2500</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm approved-btn me-2">Approved</button>
                <button className="btn btn-sm rejectbtn">Rejected</button>
              </td>
            )}
            {!isMonazam && <td className="tabledata-txt">Pending</td>}
          </tr>
          <tr>
            {isMonazam && <td className="tabledata-txt">John Doe</td>} 
            <td className="tabledata-txt">07-01-2024</td>
            <td className="tabledata-txt">OPAP to E Hajj transfer</td>
            <td className="tabledata-txt">USD</td>
            <td className="tabledata-txt">1800</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm approved-btn me-2">Approved</button>
                <button className="btn btn-sm rejectbtn">Rejected</button>
              </td>
            )}
            {!isMonazam && <td className="tabledata-txt">Done</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
