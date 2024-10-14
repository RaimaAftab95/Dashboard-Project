import React from 'react';

const Table = () => {
  return (
     <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th className="tableheader-txt">Date</th>
          <th className="tableheader-txt">Narration</th>
          <th className="tableheader-txt">Currency</th>
          <th className="tableheader-txt">Amount</th>
          <th className="tableheader-txt">VoucherID</th>
          <th className="tableheader-txt">Status</th>
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
        </tr>
        <tr>
          <td className="tabledata-txt">02-01-2024</td>
          <td className="tabledata-txt">Transfer</td>
          <td className="tabledata-txt">PKR</td>
          <td className="tabledata-txt">5000</td>
          <td className="tabledata-txt">V002</td>
          <td className="tabledata-txt">Pending</td>
        </tr>
        <tr>
          <td className="tabledata-txt">03-01-2024</td>
          <td className="tabledata-txt">Deposit</td>
          <td className="tabledata-txt">USD</td>
          <td className="tabledata-txt">1500</td>
          <td className="tabledata-txt">V003</td>
          <td className="tabledata-txt">Completed</td>
        </tr>
        <tr>
          <td className="tabledata-txt">04-01-2024</td>
          <td className="tabledata-txt">Withdrawal</td>
          <td className="tabledata-txt">EUR</td>
          <td className="tabledata-txt">2000</td>
          <td className="tabledata-txt">V004</td>
          <td className="tabledata-txt">Failed</td>
        </tr>
        <tr>
          <td className="tabledata-txt">05-01-2024</td>
          <td className="tabledata-txt">Payment</td>
          <td className="tabledata-txt">USD</td>
          <td className="tabledata-txt">1200</td>
          <td className="tabledata-txt">V005</td>
          <td className="tabledata-txt">Completed</td>
        </tr>
        <tr>
          <td className="tabledata-txt">06-01-2024</td>
          <td className="tabledata-txt">Transfer</td>
          <td className="tabledata-txt">PKR</td>
          <td className="tabledata-txt">2500</td>
          <td className="tabledata-txt">V006</td>
          <td className="tabledata-txt">Pending</td>
        </tr>
        <tr>
          <td className="tabledata-txt">07-01-2024</td>
          <td className="tabledata-txt">Deposit</td>
          <td className="tabledata-txt">USD</td>
          <td className="tabledata-txt">1800</td>
          <td className="tabledata-txt">V007</td>
          <td className="tabledata-txt">Completed</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Table;
