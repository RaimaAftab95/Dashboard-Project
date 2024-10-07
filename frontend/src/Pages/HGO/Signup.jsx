import React, { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const Signup = () => {
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [focalPerson, setFocalPerson] = useState('');
  const [number, setNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pkrIban, setPkrIban] = useState('');
  const [pkrAccountTitle, setPkrAccountTitle] = useState('');
  const [pkrBankName, setPkrBankName] = useState('');
  const [pkrBranchName, setPkrBranchName] = useState('');
  const [pkrSwiftCode, setPkrSwiftCode] = useState('');
  const [fcyIban, setFcyIban] = useState('');
  const [fcyAccountTitle, setFcyAccountTitle] = useState('');
  const [fcyBankName, setFcyBankName] = useState('');
  const [fcyBranchName, setFcyBranchName] = useState('');
  const [fcySwiftCode, setFcySwiftCode] = useState('');
  const [iban, setIban] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup details:', accountName, email, phone, focalPerson, number, newPassword, pkrIban, pkrAccountTitle, pkrBankName, pkrBranchName, pkrSwiftCode, fcyIban, fcyAccountTitle, fcyBankName, fcyBranchName, fcySwiftCode);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="img-fluid logo"
          />
        </div>

        {/* Signup form */}
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label className='label-text'>Monazam Account Name</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Company Name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label className='label-text'>Email</label>
              <input
                type="email"
                className="form-control input-style"
                placeholder="ali@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-50 ms-2">
              <label className='label-text'>Phone Number</label>
              <input
                type="tel"
                className="form-control input-style"
                placeholder="
                (+237)696 88 77 55"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>Focal Person</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Name"
              value={focalPerson}
              onChange={(e) => setFocalPerson(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>Number</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="For Ex:0303XXXXX32"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 position-relative">
            <label className='label-text'>New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control input-style"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='eye-icon'
            >
              {showPassword ? <FaEye />  :  <FaEyeSlash />}
            </span>
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR NC Account IBAN</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="IBAN Number"
              value={pkrIban}
              onChange={(e) => setPkrIban(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR Account Title</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Name"
              value={pkrAccountTitle}
              onChange={(e) => setPkrAccountTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR Bank Name</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Name"
              value={pkrBankName}
              onChange={(e) => setPkrBankName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label className='label-text'>PKR Branch Name</label>
              <input
                type="text"
                className="form-control input-style"
                placeholder="Name"
                value={pkrBranchName}
                onChange={(e) => setPkrBranchName(e.target.value)}
              />
            </div>
            <div className="w-50 ms-2">
              <label className='label-text'>PKR Swift Code</label>
              <input
                type="text"
                className="form-control input-style"
                placeholder="Code"
                value={pkrSwiftCode}
                onChange={(e) => setPkrSwiftCode(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>FCY NC Account IBAN</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="IBAN"
              value={fcyIban}
              onChange={(e) => setFcyIban(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label className='label-text'>FCY Account Title</label>
              <input
                type="text"
                className="form-control input-style"
                placeholder="Title"
                value={fcyAccountTitle}
                onChange={(e) => setFcyAccountTitle(e.target.value)}
              />
            </div>
            <div className="w-50 ms-2">
              <label className='label-text'>FCY Bank Name</label>
              <input
                type="text"
                className="form-control input-style"
                placeholder="Name"
                value={fcyBankName}
                onChange={(e) => setFcyBankName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label className='label-text'>FCY Branch Name</label>
              <input
                type="text"
                className="form-control input-style"
                placeholder="Name"
                value={fcyBranchName}
                onChange={(e) => setFcyBranchName(e.target.value)}
              />
            </div>
            <div className="w-50 ms-2">
              <label className='label-text'>FCY Swift Code</label>
              <input
                type="text"
                className="form-control input-style"
                placeholder="Code"
                value={fcySwiftCode}
                onChange={(e) => setFcySwiftCode(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>E-Hajj IBAN</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="IBAN"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 green-btn label-text">
            Sign-Up
          </button>
        </form>

        <div className="text-center mt-3">
          <span className='label-text'>Already have an account? </span>
          <a href="#" className="text-decoration-underline lightgreen-txt">
            Login Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
