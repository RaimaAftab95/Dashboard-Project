import React from 'react';

const Table = ({ rollId }) => {
  const isMonazam = rollId === 'monazam';

  return (
    <div className="table-responsive">
      <table className="table table-sm">
        <thead>
          <tr>
            {isMonazam && <th className="tableheader-txt">HGO Name</th>}
            <th className="tableheader-txt">Date</th>
            <th className="tableheader-txt">Narration</th>
            <th className="tableheader-txt">Currency</th>
            <th className="tableheader-txt">Amount</th>
            <th className="tableheader-txt">Voucher ID</th> 
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
            <td className="tabledata-txt">V123456</td>
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm btn-compact me-2">Approved</button>
                <button className="btn btn-sm btn-compactreject">Rejected</button>
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
            <td className="tabledata-txt">V654321</td> 
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm btn-compact me-2">Approved</button>
                <button className="btn btn-sm btn-compactreject">Rejected</button>
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
            <td className="tabledata-txt">V789012</td> 
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm btn-compact me-2">Approved</button>
                <button className="btn btn-sm btn-compactreject">Rejected</button>
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
            <td className="tabledata-txt">V345678</td> 
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm btn-compact me-2">Approved</button>
                <button className="btn btn-sm btn-compactreject">Rejected</button>
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
            <td className="tabledata-txt">V987654</td> 
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm btn-compact me-2">Approved</button>
                <button className="btn btn-sm btn-compactreject">Rejected</button>
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
            <td className="tabledata-txt">V246810</td> 
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm btn-compact me-2">Approved</button>
                <button className="btn btn-sm btn-compactreject">Rejected</button>
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
            <td className="tabledata-txt">V135791</td> 
            {isMonazam && (
              <td className="tabledata-txt">
                <button className="btn btn-sm btn-compact me-2">Approved</button>
                <button className="btn btn-sm btn-compactreject">Rejected</button>
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

