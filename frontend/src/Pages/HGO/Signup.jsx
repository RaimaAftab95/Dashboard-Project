import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Signup = () => {
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [focalPerson, setFocalPerson] = useState('');
  const [number, setNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
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

        {/* Signup form */}
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label>Monazam Account Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your account name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
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
            <div className="w-50 ms-2">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  borderColor: '#00341a',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label>Focal Person</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter focal person's name"
              value={focalPerson}
              onChange={(e) => setFocalPerson(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label>Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label>PKR NC Account IBAN</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your PKR NC Account IBAN"
              value={pkrIban}
              onChange={(e) => setPkrIban(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label>PKR Account Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your PKR Account Title"
              value={pkrAccountTitle}
              onChange={(e) => setPkrAccountTitle(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label>PKR Bank Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your PKR Bank Name"
              value={pkrBankName}
              onChange={(e) => setPkrBankName(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label>PKR Branch Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter PKR Branch Name"
                value={pkrBranchName}
                onChange={(e) => setPkrBranchName(e.target.value)}
                style={{
                  borderColor: '#00341a',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
              />
            </div>
            <div className="w-50 ms-2">
              <label>PKR Swift Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter PKR Swift Code"
                value={pkrSwiftCode}
                onChange={(e) => setPkrSwiftCode(e.target.value)}
                style={{
                  borderColor: '#00341a',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label>FCY NC Account IBAN</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your FCY NC Account IBAN"
              value={fcyIban}
              onChange={(e) => setFcyIban(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label>FCY Account Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your FCY Account Title"
                value={fcyAccountTitle}
                onChange={(e) => setFcyAccountTitle(e.target.value)}
                style={{
                  borderColor: '#00341a',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
              />
            </div>
            <div className="w-50 ms-2">
              <label>FCY Bank Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your FCY Bank Name"
                value={fcyBankName}
                onChange={(e) => setFcyBankName(e.target.value)}
                style={{
                  borderColor: '#00341a',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
              />
            </div>
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label>FCY Branch Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter FCY Branch Name"
                value={fcyBranchName}
                onChange={(e) => setFcyBranchName(e.target.value)}
                style={{
                  borderColor: '#00341a',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
              />
            </div>
            <div className="w-50 ms-2">
              <label>FCY Swift Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter FCY Swift Code"
                value={fcySwiftCode}
                onChange={(e) => setFcySwiftCode(e.target.value)}
                style={{
                  borderColor: '#00341a',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label className="font-medium">E-Hajj IBAN</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your E-Hajj IBAN"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              style={{
                borderColor: '#00341a',
                outline: 'none',
                backgroundColor: 'white',
                boxShadow: 'none'
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100"  style={{ backgroundColor: '#00341a' }}>
            Signup <FaArrowRight />
          </button>
        </form>

        <div className="text-center mt-3">
          <span>Already have an account? </span>
          <a href="#" className="text-decoration-underline" style={{ color: '#80c99f' }}>
            Login Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
