import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const MonazamSidebarBtns = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <div>
      {/* Button for Monazam to OPAP */}
      <div className="mb-3">
        <button
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={toggleDropdown}
        >
          <div className="d-flex align-items-center">
             Monazam to OPAP
            <img src="/assets/Frame 87.png" alt="Frame" className="me-2 img-fluid" style={{ width: '24px', height: '24px' }} />
        
          </div>
          {showDropdown ? <FaMinus className="plus-icon" /> : <FaPlus className="plus-icon" />}
        </button>
        {showDropdown && (

        <div className="mt-2 border p-2 rounded">
    <div className="d-flex align-items-center">
      {/* PKR and SAR labels above input fields */}
      <div className="d-flex flex-column align-items-center">
        <span className="text-muted me-5" style={{ fontSize: '0.5rem' }}>PKR</span>
        <input
          type="text"
          value="100"
          className="form-control label-text text-center"
          style={{ width: '60px' } }
        />
      </div>
      
      <span>=</span>
      
      <div className="d-flex flex-column align-items-center">
        <span className="text-muted me-5" style={{ fontSize: '0.5rem' }}>SAR</span>
        <input
          type="text"
          value="1"
          className="form-control label-text text-center"
          style={{ width: '60px' }}
        />
      </div>
    </div>
  </div>
        )}
      </div>

      {/* Button for Monazam to Ehajj */}
      <div className="mb-3">
        <button
          className="btn label-text w-100 d-flex justify-content-between align-items-center"
          onClick={toggleDropdown}
        >
          <div className="d-flex align-items-center">
            Monazam to Ehajj
            <img src="/assets/Frame 87.png" alt="Frame" className="me-2 img-fluid" style={{ width: '24px', height: '24px' }} />
            
          </div>
          {showDropdown ? <FaMinus className="plus-icon" /> : <FaPlus className="plus-icon" />}
        </button>
        {showDropdown && (
                  <div className="mt-2 border p-2 rounded">
    <div className="d-flex align-items-center">
      {/* PKR and SAR labels above input fields */}
      <div className="d-flex flex-column align-items-center">
        <span className="text-muted me-5" style={{ fontSize: '0.5rem' }}>PKR</span>
        <input
          type="text"
          value="100"
          className="form-control label-text text-center"
          style={{ width: '60px' }}
        />
      </div>
      
      <span>=</span>
      
      <div className="d-flex flex-column align-items-center">
        <span className="text-muted  me-5" style={{ fontSize: '0.5rem' }}>SAR</span>
        <input
          type="text"
          value="1"
          className="form-control label-text text-center"
          style={{ width: '60px' }}
        />
      </div>
    </div>
  </div>
        )}
      </div>
    </div>
  );
};

export default MonazamSidebarBtns;
