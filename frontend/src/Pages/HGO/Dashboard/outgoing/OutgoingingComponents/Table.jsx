import React, { useEffect, useState } from 'react';
import { useRollId } from '../../common_components/RollIdContext';// Import the hook
import axios from 'axios';

const Table = () => {
   const { rollId } = useRollId(); // Use the context to get rollId
  const isMonazam = rollId === 'monazam';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the outgoing request API
  const fetchOutgoingRequests = async (limit = 7, offset = 0) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/outgoingrequest?limit=${limit}&offset=${offset}`);
      setData(response.data);
    } catch (error) {
      setError('Error fetching data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchOutgoingRequests();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {isMonazam && <th className="tableheader-txt">HGO Name</th>}
            <th className="tableheader-txt">Date</th>
            <th className="tableheader-txt">Narration</th>
            <th className="tableheader-txt">Type</th>
            <th className="tableheader-txt">Currency</th>
            <th className="tableheader-txt">Amount</th>
            {isMonazam && <th className="tableheader-txt">Actions</th>}
            {!isMonazam && <th className="tableheader-txt">Status</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((request, index) => (
            <tr key={index}>
              {isMonazam && <td className="tabledata-txt">{request.hgoName || 'N/A'}</td>} 
              <td className="tabledata-txt">{new Date(request.date).toISOString().split('T')[0]}</td>
              <td className="tabledata-txt">{request.narration}</td>
              <td className="tabledata-txt">{request.type}</td>
              <td className="tabledata-txt">{request.currency}</td>
              <td className="tabledata-txt">{request.amount}</td>
              {isMonazam && (
                <td className="tabledata-txt">
                  <button className="btn btn-sm approved-btn me-2">Approved</button>
                  <button className="btn btn-sm rejectbtn">Rejected</button>
                </td>
              )}
              {!isMonazam && <td className="tabledata-txt">{request.status || 'Pending'}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
