import React from 'react';

const Notification = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal notification-modalposition">
      <div className="modal-dialog notification-modal">
        <div className="modal-content notification-modal-height">
          <div className="modal-header">
            <h5 className="modal-title">Notification</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
          <p>This is an empty modal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;