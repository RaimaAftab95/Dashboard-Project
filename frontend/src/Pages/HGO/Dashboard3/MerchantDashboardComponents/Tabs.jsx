import React from 'react';
import { FaBell } from 'react-icons/fa';

const Tabs = () => {

  return (
    <div className="d-flex justify-content-end mb-4 align-items-center">
      <ul className="nav">
        <li className="nav-item">
          <a 
            className="nav-link tab-link" 
            href="#"  
          >
            Incoming
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">Outgoing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">Monazama Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">OPAP Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link" href="#">E-Hajj Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link tab-link active"
            href="#" 
           >
            Merchant
            </a>
        </li>
      </ul>
      <FaBell size={20} className="ms-3" />
    </div>
  );
};

export default Tabs;
