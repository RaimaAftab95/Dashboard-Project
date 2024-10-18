import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center text-center error-page">
     
         <FaExclamationTriangle className="error-icon text-danger mb-4" size={50} />

     
      <div className="error-message">
        <h2 className="error-heading mb-3">Oops! Something went wrong.</h2>
        <p className="error-description mb-4">
          The page you're looking for cannot be found or an unexpected error has occurred. Please try again later or go back to the homepage.
        </p>
      </div>

      <button 
        className="btn modal-label-txt modal-btn-bg d-flex align-items-center"
        onClick={handleGoBack}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
