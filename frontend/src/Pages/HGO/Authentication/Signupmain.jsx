import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signupmain = () => {
  const navigate = useNavigate();

  const handleSignupHgo = (e) => {
    e.preventDefault();
    navigate('/signuphgo');
  };

  const handleSignupMonazam = (e) => {
    e.preventDefault();
    navigate('/signupmonazam');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
      
        <div className="text-center mb-4">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="img-fluid logo"
          />
        </div>

        <form>
          <div className="d-flex flex-column flex-md-row gap-3">
            <button
              type="button"
              className="btn w-100 green-btn"
              onClick={handleSignupHgo}
            >
              <span className='white-arrow'>Signup HGO</span> 
              <FaArrowRight className="ms-2 white-arrow" />
            </button>

            <button
              type="button"
              className="btn w-100 green-btn"
              onClick={handleSignupMonazam} 
            >
              <span className='white-arrow'>Signup Monazam</span> 
              <FaArrowRight className="ms-2 white-arrow" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Signupmain;
