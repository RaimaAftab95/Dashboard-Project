import React, { useState ,useEffect } from 'react';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const Loginmain = () => {
  const [enrollment, setEnrollment] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate to navigate after login
  
  // Check if the user is already logged in
  useEffect(() => {
    const user_Type = localStorage.getItem('user_Type');
    if (user_Type) {
      // Redirect based on user_Type
      if (user_Type === 'Monazam') {
        navigate('/incoming'); // Monazam Dashboard
      } else if (user_Type === 'HGO') {
        navigate('/incoming'); // HGO Dashboard
      }
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    // Make an API call to your backend login API
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enrollment, password })
    })
      .then(res => res.json())
      .then(data => {

        if (data.success && data.id && data.user_Type) {         
          localStorage.setItem('id', data.id);
          localStorage.setItem('email', data.email);
          localStorage.setItem('name', data.name);
          localStorage.setItem('enrollment', data.enrollment);
          localStorage.setItem('user_Type', data.user_Type);

          // Redirect based on userType (Monazam or HGO)
          if (data.user_Type === 'Monazam') {
            navigate('/incoming'); 
            console.log( data.user) // Monazam Dashboard
          } else if (data.user_Type === 'HGO') {
            navigate('/incoming');  // HGO Dashboard
          }
        } else {
          // Handle error message
          setError(data.message || 'Login failed');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        setError('Server error during login');
      });
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
              type="number"
              className="form-control input-style"
              placeholder="0234"
              value={enrollment}
              onChange={(e) => setEnrollment(e.target.value)}
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

          {/* Show error message if login fails */}
          {error && <div className="alert alert-danger">{error}</div>}
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
          <a href="/createaccount" className="text-decoration-none lightgreen-txt">
            Signup Here
          </a>
        </div>
      </div>
    </div> 
  );
};

export default Loginmain;
