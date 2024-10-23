import React, { useEffect, useState } from 'react';
import { useRollId } from '../../common_components/RollIdContext';// Import the hook

const Table = () => {
  const { rollId } = useRollId(); // Use the context to get rollId
  const isMonazam = rollId === '1';
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch incoming requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/incomingrequest?limit=7&offset=0'); // Adjust limit and offset as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRequests(data); // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Set error message if any error occurs
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchRequests();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>Error: {error}</div>; // Show error message

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
          {requests.map((request, index) => (
            <tr key={index}>
              {isMonazam && <td className="tabledata-txt">{request.hgoName}</td>} {/* Adjust based on your API response */}
              <td className="tabledata-txt">{new Date(request.date).toISOString().split('T')[0]}</td>
              <td className="tabledata-txt">{request.narration}</td>
              <td className="tabledata-txt">{request.currency}</td>
              <td className="tabledata-txt">{request.amount}</td>
              {isMonazam && (
                <td className="tabledata-txt">
                  <button className="btn btn-sm approved-btn me-2">Approved</button>
                  <button className="btn btn-sm rejectbtn">Rejected</button>
                </td>
              )}
              {!isMonazam && <td className="tabledata-txt">Pending</td>} {/* Adjust based on your API response */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
