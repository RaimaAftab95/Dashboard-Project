import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginAsHGO = () => {
    navigate('/login?role=hgo&id=2'); 
  };

  const handleLoginAsMonazam = () => {
    navigate('/login?role=monazam&id=1'); 
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
          <button
            type="button"
            onClick={handleLoginAsHGO}
            className="btn w-100 green-btn mb-5 mt-5"
          >
            <span className='white-arrow'>Login as HGO</span>
            <FaArrowRight className="ms-2 white-arrow" />
          </button>

          <button
            type="button"
            onClick={handleLoginAsMonazam}
            className="btn w-100 green-btn"
          >
            <span className='white-arrow'>Login as Monazam</span>
            <FaArrowRight className="ms-2 white-arrow" />
          </button>
        </form>

      </div>
    </div> 
  );
};

export default Login;