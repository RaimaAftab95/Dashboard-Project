import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AccumulativeBtn = () => {
  return (
    <div className="mb-3">
      <button
        className="btn label-text w-100 d-flex justify-content-between align-items-center"
      >
        Accumulative Request <FaPlus className="plus-icon" />
      </button>
    </div>
  );
};

export default AccumulativeBtn;
