import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';


const OutgoingRequest = ({ isOpen, onClose }) => {
  // State to store form data
  const [formData, setFormData] = useState({
    date: '',
    narration: '',
    amount: '',
    currency: '',
    type: '',
  });

  // State to store error or success messages
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
 const handleSubmit = async (e) => {
    e.preventDefault();

    const { date, narration, currency,type, amount } = formData;

 
    if (!date || !narration || !currency ||!type|| !amount) {
      alert('All fields are required.');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/outgoingrequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData); // Check the 'type' value being sent

      const data = await response.json();
      if (response.ok) {
        alert('Data saved successfully!');
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
            <h2 className="modal-title mx-auto modal-heading-txt">Outgoing Request</h2>
          </div>

          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Date</label>
                <input
                  type="date"
                  className="form-control modal-input-txt mb-3"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

                <label className="modal-label-txt">Narration</label>
                <textarea
                  className="form-control modal-input-txt mb-3"
                  rows="3"
                  placeholder="comments"
                  name="narration"
                  value={formData.narration}
                  onChange={handleChange}
                ></textarea>

                <label className="modal-label-txt">Amount</label>
                <input
                  type="number"
                  className="form-control modal-input-txt"
                  placeholder="20,500"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="modal-label-txt">Currency</label>
                <select
                  className="form-select modal-input-txt mb-3"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="pkr">PKR</option>
                  <option value="usd">USD</option>
                </select>

                <label className="modal-label-txt">Type</label>
                <select
                  className="form-select modal-input-txt"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Monazam to OPAP transfer">Monazam to OPAP transfer</option>
                  <option value="OPAP to E Hajj transfer">OPAP to E Hajj transfer</option>
                </select>
              </div>
            </div>
          </div>

          <div className="modal-footer justify-content-center">
            <button className="btn w-50 modal-label-txt modal-btn-bg" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          {message && (
            <div className={`alert mt-3 ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutgoingRequest;
