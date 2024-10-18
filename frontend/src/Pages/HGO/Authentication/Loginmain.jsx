import React, { useState } from 'react';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';

const Loginmain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login details:', email, password);
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
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label className='label-text'>Enrollment Number</label>
            <input
              type="email"
              className="form-control input-style"
              placeholder="02345643432"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 position-relative">
            <label className='label-text'>Password</label>
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

          <div className="mb-3 text-center">
            <span className='label-text'>Forget Password? </span>
            <a href="/resetpassword" className="text-decoration-none lightgreen-txt">
           Reset Password
          </a>
          </div>

          <button
            type="submit"
            className="btn w-100 green-btn"
          >
         <span className='white-arrow'> Login</span> 
            <FaArrowRight className="ms-2 white-arrow"/>
          </button>
        </form>

        <div className="text-center mt-3">
          <span className='label-text'>Don't have an account? </span>
          <a href="/signup" className="text-decoration-none lightgreen-txt">
            Signup Here
          </a>
        </div>
      </div>
    </div> 
  );
};

export default Loginmain;