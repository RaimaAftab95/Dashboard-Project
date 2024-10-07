import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log('Reset email:', email);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
        {/* Logo */}
        <div className="text-center mb-4">
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo" />
        </div>

        {/* Reset Password Form */}
        <form onSubmit={handleResetPassword}>
          <div className="form-group mb-3">
            <label className='label-text'>Email Address</label>
            <input
              type="email"
              className="form-control input-style"
              placeholder="force@adressemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Reset Password Button */}
          <button type="submit" className="btn w-100 green-btn">
            <span className='white-arrow'>Reset Password</span> 
            {/* <FaArrowRight className="ms-2 white-arrow" /> */}
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-decoration-underline lightgreen-txt">
            Back to Login Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;