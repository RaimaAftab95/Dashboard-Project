import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const MerchantRequest = ({ isOpen, onClose, onRequestSuccess  }) => {
  const initialFormData = {
    date: '',
    narration: '',
    voucherid: '',
    amount: ''
  };

  const [formData, setFormData] = useState(initialFormData); // Initialize form data state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { date, narration, voucherid, amount } = formData;

    if (!date || !narration || !voucherid || !amount) {
      alert('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/merchantrequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Request Generated');
        onRequestSuccess(data);
        setFormData(initialFormData); // Reset form data after successful submission
        onClose();
      } else {
        alert(data.message || 'Failed to save data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data');
    }
  };

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
            <h2 className="modal-title mx-auto modal-heading-txt">Merchant Transfer Request</h2>
          </div>
          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control modal-input-txt"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Voucher ID</label>
                <input
                  type="text"
                  name="voucherid"
                  className="form-control modal-input-txt w-80"
                  placeholder="000000"
                  value={formData.voucherid}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="modal-label-txt">Narration</label>
              <textarea
                name="narration"
                className="form-control modal-input-txt w-50"
                rows="3"
                placeholder="comments"
                value={formData.narration}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="modal-label-txt">Amount</label>
              <input
                type="number"
                name="amount"
                className="form-control modal-input-txt w-50"
                placeholder="20,500"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="modal-footer justify-content-center">
            <button className="btn w-50 modal-label-txt modal-btn-bg" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantRequest;
