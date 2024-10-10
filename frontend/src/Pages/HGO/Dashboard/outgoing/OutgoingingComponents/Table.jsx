import React from 'react';

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tableheader-txt">Date</th>
          <th className="tableheader-txt">Type</th>
          <th className="tableheader-txt">Narration</th>
          <th className="tableheader-txt">Currency</th>
          <th className="tableheader-txt">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tabledata-txt">01-01-2024</td>
          <td className="tabledata-txt">Monazam to OPAP transfer</td>
          <td className="tabledata-txt">Payment</td>
          <td className="tabledata-txt">USD</td>
          <td className="tabledata-txt">1000</td>
        </tr>
        <tr>
          <td className="tabledata-txt">02-01-2024</td>
          <td className="tabledata-txt">OPAP to E Hajj transfer</td>
          <td className="tabledata-txt">Transfer</td>
          <td className="tabledata-txt">PKR</td>
          <td className="tabledata-txt">5000</td>
        </tr>
        <tr>
          <td className="tabledata-txt">03-01-2024</td>
          <td className="tabledata-txt">Monazam to OPAP transfer</td>
          <td className="tabledata-txt">Deposit</td>
          <td className="tabledata-txt">USD</td>
          <td className="tabledata-txt">1500</td>
        </tr>
        <tr>
          <td className="tabledata-txt">04-01-2024</td>
          <td className="tabledata-txt">OPAP to E Hajj transfer</td>
          <td className="tabledata-txt">Withdrawal</td>
          <td className="tabledata-txt">EUR</td>
          <td className="tabledata-txt">2000</td>
        </tr>
        <tr>
          <td className="tabledata-txt">05-01-2024</td>
          <td className="tabledata-txt">OPAP to E Hajj transfer</td>
          <td className="tabledata-txt">Payment</td>
          <td className="tabledata-txt">USD</td>
          <td className="tabledata-txt">1200</td>
        </tr>
        <tr>
          <td className="tabledata-txt">06-01-2024</td>
          <td className="tabledata-txt">OPAP to E Hajj transfer</td>
          <td className="tabledata-txt">Transfer</td>
          <td className="tabledata-txt">PKR</td>
          <td className="tabledata-txt">2500</td>
        </tr>
        <tr>
          <td className="tabledata-txt">07-01-2024</td>
          <td className="tabledata-txt">OPAP to E Hajj transfer</td>
          <td className="tabledata-txt">Deposit</td>
          <td className="tabledata-txt">USD</td>
          <td className="tabledata-txt">1800</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
