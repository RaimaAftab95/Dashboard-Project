import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar dashboard-sidebar-bg d-flex flex-column">

      {/* Logo */}
      <div className="text-center mb-4 sidebar-logo-bg">
        <img src="/assets/logo.png" alt="Logo" className="img-fluid mb-3" />
      </div>
      
      {/* Buttons */}
      <div className="mb-3">
        <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
          Incoming Requests <FaPlus className='plus-icon' />
        </button>
      </div>
      <div className="mb-3">
        <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
          Outgoing Requests <FaPlus className='plus-icon' />
        </button>
      </div>
      <div className="mb-3">
        <button className="btn label-text w-100 d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-start">
            <span>Merchant Transfer</span>
            <span>Request</span>
          </div>
          <FaPlus className='plus-icon' />
        </button>
      </div>
      
      {/* User Info */}
      <div className="mt-auto d-flex align-items-center justify-content-center mb-3">
        <img
          src="/assets/Ellipse 14.png"
          alt="User"
          className="user-circle me-2"
        />
        <div>
          <div className="fw-bold lightgreen-txt">Tim Cook</div>
          <div className="lightgreen-txt">timcook@force.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
