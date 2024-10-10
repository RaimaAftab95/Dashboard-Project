import React from 'react';
import { FaTimes } from 'react-icons/fa';

const IncomingRequest = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal d-block modal-blur-bg">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="px-5 modal-content">
          {/* Close button */}
          <button
            className="btn modal-label-txt modal-btn-bg btn-success position-absolute top-0 end-0 m-3"
            onClick={onClose}
          >
           Close <FaTimes className="me-1" /> 
          </button>

          {/* Modal Header */}
          <div className="modal-header">
            <h2 className="modal-title mx-auto modal-heading-txt">Incoming Request</h2>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Date</label>
                <input type="date" className="form-control modal-input-txt" />
              </div>
              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Currency</label>
                <select className="form-select modal-input-txt">
                  <option value="">Select</option>
                  <option value="kr">KR</option>
                  <option value="usd">USD</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="modal-label-txt">Narration</label>
              <textarea className="form-control modal-input-txt w-50" rows="3" placeholder="comments"></textarea>
            </div>

            <div className="mb-3">
              <label className="modal-label-txt">Amount</label>
              <input type="number" className="form-control modal-input-txt w-50" placeholder="20,500" />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer justify-content-center">
            <button className="btn w-50 modal-label-txt modal-btn-bg" onClick={onClose}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingRequest;
