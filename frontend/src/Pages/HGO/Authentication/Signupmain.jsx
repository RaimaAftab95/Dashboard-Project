import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Login = () => {
 

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('Login details:', email, password);
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

          <button
            type="submit"
            className="btn w-100 green-btn mb-5 mt-5"
          >
         <span className='white-arrow'> Signup as HGO</span> 
            <FaArrowRight className="ms-2 white-arrow"/>
          </button>

          <button
            type="submit"
            className="btn w-100 green-btn"
          >
         <span className='white-arrow'> Signup as Monazam</span> 
            <FaArrowRight className="ms-2 white-arrow"/>
          </button>
        </form>

      </div>
    </div> 
  );
};

export default Login;