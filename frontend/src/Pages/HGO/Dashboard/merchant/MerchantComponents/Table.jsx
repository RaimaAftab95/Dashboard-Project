import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRollId } from '../../common_components/RollIdContext';// Import the hook

const Table = () => {
  const { rollId } = useRollId(); // Use the context to get rollId
  const isMonazam = rollId === '1';
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error messages

  // Function to fetch merchant requests from the API
  const fetchMerchantRequests = async (limit = 7, offset = 0) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/merchantrequest?limit=${limit}&offset=${offset}`);
      setData(response.data); // Set fetched data to state
    } catch (error) {
      setError('Error fetching data'); // Set error message if API call fails
      console.error(error);
    } finally {
      setLoading(false); // Update loading state
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchMerchantRequests();
  }, []);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-responsive">
      <table className="table table-sm">
        <thead>
          <tr>
            {isMonazam && <th className="tableheader-txt">HGO Name</th>}
            <th className="tableheader-txt">Date</th>
            <th className="tableheader-txt">Narration</th>
            <th className="tableheader-txt">Amount</th>
            <th className="tableheader-txt">Voucher ID</th>
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
              <td className="tabledata-txt">{request.amount}</td>
              <td className="tabledata-txt">{request.voucherid}</td>
              {isMonazam && (
                <td className="tabledata-txt">
                  <button className="btn btn-sm btn-compact me-2">Approved</button>
                  <button className="btn btn-sm btn-compactreject">Rejected</button>
                </td>
              )}
              {!isMonazam && <td className="tabledata-txt">Done</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
