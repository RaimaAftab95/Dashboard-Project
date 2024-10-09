import React from 'react';
import { FaTimes } from 'react-icons/fa';

const OutgoingRequest = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal d-block modal-blur-bg">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="px-5 modal-content">
         
          <button
            className="btn modal-label-txt modal-btn-bg btn-success position-absolute top-0 end-0 m-3"
            onClick={onClose}
          >
            Close <FaTimes className="me-1" />
          </button>

          <div className="modal-header">
            <h2 className="modal-title mx-auto modal-heading-txt">Outgoing Request</h2>
          </div>

          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Date</label>
                <input type="date" className="form-control modal-input-txt mb-3" />

                <label className="modal-label-txt">Narration</label>
                <textarea className="form-control modal-input-txt mb-3" rows="3" placeholder="comments"></textarea>

                <label className="modal-label-txt">Amount</label>
                <input type="number" className="form-control modal-input-txt" placeholder="20,500" />
              </div>

            
              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Currency</label>
                <select className="form-select modal-input-txt mb-3">
                  <option value="">Select</option>
                  <option value="kr">KR</option>
                  <option value="usd">USD</option>
                </select>

                <label className="modal-label-txt">Type</label>
                <select className="form-select modal-input-txt">
                  <option value="">Select</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
              </div>
            </div>
          </div>

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

export default OutgoingRequest;
