import React from 'react';

const Table = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Narration</th>
          <th>Currency</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01-01-2024</td>
          <td>Payment</td>
          <td>USD</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>02-01-2024</td>
          <td>Transfer</td>
          <td>PKR</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>03-01-2024</td>
          <td>Deposit</td>
          <td>USD</td>
          <td>1500</td>
        </tr>
        <tr>
          <td>04-01-2024</td>
          <td>Withdrawal</td>
          <td>EUR</td>
          <td>2000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
