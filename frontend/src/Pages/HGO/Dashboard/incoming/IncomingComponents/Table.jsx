import React, { useEffect, useState } from 'react';
import Filterbtn from './Filterbtn';
import Pagination from './Pagination'; 

const Table = () => {
  const [requests, setRequests] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const recordsPerPage = 7;

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/incomingrequest');
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchTotalCount = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/incomingrequest/count');
        const count = await response.json();
        setTotalCount(count);
      } catch (error) {
        console.error('Error fetching total count:', error);
      }
    };

    fetchRequests();
    fetchTotalCount();
  }, [currentPage]);

  const formatDate = (isoDateString) => {
    const dateObj = new Date(isoDateString);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };


  // Sorting function
  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    const sortedData = [...requests].sort((a, b) => {
      if (key === 'date') {
        return direction === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      if (key === 'currency') {
        return direction === 'asc'
          ? a.currency.localeCompare(b.currency)
          : b.currency.localeCompare(a.currency);
      }
      return 0;
    });

    setRequests(sortedData);
    setSortConfig({ key, direction });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Filterbtn sortData={sortData} /> 
      <table className="table">
        <thead>
          <tr>
            <th className="tableheader-txt" onClick={() => sortData('date')}>
              Date
            </th>
            <th className="tableheader-txt">Narration</th>
            <th className="tableheader-txt" onClick={() => sortData('currency')}>
              Currency
            </th>
            <th className="tableheader-txt">Amount</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((request, index) => (
              <tr key={index}>
                <td className="tabledata-txt">{formatDate(request.date)}</td>
                <td className="tabledata-txt">{request.narration}</td>
                <td className="tabledata-txt">{request.currency}</td>
                <td className="tabledata-txt">{request.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="tabledata-txt">No incoming Request </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-end mt-5">
      <Pagination 
        currentPage={currentPage} 
        totalCount={totalCount} 
        recordsPerPage={recordsPerPage} 
        onPageChange={handlePageChange} 
      /> 
       </div>
    </>
  );
};

export default Table;