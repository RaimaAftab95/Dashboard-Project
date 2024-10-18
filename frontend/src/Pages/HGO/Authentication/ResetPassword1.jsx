import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword1 = () => {
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log('Reset email:', email);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
    
        <div className="text-center mb-4">
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo" />
        </div>

        <form onSubmit={handleResetPassword}>
          <div className="form-group mb-3 position-relative">
            <label className='label-text'>Create New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control input-style"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='eye-icon'
            >
              {showPassword ? <FaEye />  :  <FaEyeSlash />}
            </span>
          </div>
<div className="form-group mb-3 position-relative">
            <label className='label-text'>Confirm New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control input-style"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='eye-icon'
            >
              {showPassword ? <FaEye />  :  <FaEyeSlash />}
            </span>
          </div>

      
          <button type="submit" className="btn w-100 green-btn">
            <span className='white-arrow'>Modify</span> 
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/" className="text-decoration-none lightgreen-txt">
            Back to Login Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword1;