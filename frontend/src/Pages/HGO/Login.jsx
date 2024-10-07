import React, { useState } from 'react';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login details:', email, password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4" style={{ maxWidth: '400px', width: '100%' }}>
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src="/path-to-logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '150px' }}
          />
        </div>

        {/* Login form */}
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Enrollment Number</label>
            <input
              type="email"
              className="form-control"
              placeholder="02345643432"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3 position-relative">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '28px',
                cursor: 'pointer'
              }}
            >
              {showPassword ? <FaEye />  :  <FaEyeSlash />}
            </span>
          </div>

          <div className="mb-3 text-center">
            <span className="text-muted">Forget Password?</span>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: '#00341a' }}
          >
            <span
              style={{
                backgroundColor: '#ffe81a',
                color: '#00341a',
                padding: '1px 10px',
                borderRadius: '5px'
              }}
            >
              Login
            </span>
            <FaArrowRight className="ms-2" style={{ color: 'white' }} />
          </button>
        </form>

        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <a href="#" className="text-decoration-underline" style={{ color: '#80c99f' }}>
            Signup Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;