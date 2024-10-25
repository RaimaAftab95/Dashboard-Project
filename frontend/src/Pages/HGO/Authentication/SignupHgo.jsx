import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Signuphgo = () => {
  const [accountName, setAccountName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [focalPerson, setFocalPerson] = useState('');
  const [password, setPassword] = useState('');
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
  const [e_hajj_iban, setIban] = useState('');

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [fieldErrors, setFieldErrors] = useState({
    accountName: '',
    name: '',
    email: '',
    phone: '',
    focalPerson: '',
    password: '',
    pkrIban: '',
    pkrAccountTitle: '',
    pkrBankName: '',
    pkrBranchName: '',
    pkrSwiftCode: '',
    fcyIban: '',
    fcyAccountTitle: '',
    fcyBankName: '',
    fcyBranchName: '',
    fcySwiftCode: '',
    e_hajj_iban: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanies();
  }, []);

  const validateFields = () => {
    const errors = {};
    
    if (!accountName) errors.accountName = 'Account Name is required.';
    if (!email || !emailRegex.test(email)) errors.email = 'Please enter a valid email address.';
    if (!phone) errors.phone = 'Phone number is required.';
    if (!name) errors.name = 'HGO Name is required.';
    if (!focalPerson) errors.focalPerson = 'Focal Person is required.';
    if (!password) errors.password = 'Password is required.';
    if (password.length < 6) errors.password = 'Password must be at least 6 characters long.';
    if (!pkrIban) errors.pkrIban = 'PKR IBAN is required.';
    if (!pkrAccountTitle) errors.pkrAccountTitle = 'PKR Account Title is required.';
    if (!pkrBankName) errors.pkrBankName = 'PKR Bank Name is required.';
    if (!pkrBranchName) errors.pkrBranchName = 'PKR Branch Name is required.';
    if (!pkrSwiftCode) errors.pkrSwiftCode = 'PKR Swift Code is required.';
    if (!fcyIban) errors.fcyIban = 'FCY IBAN is required.';
    if (!fcyAccountTitle) errors.fcyAccountTitle = 'FCY Account Title is required.';
    if (!fcyBankName) errors.fcyBankName = 'FCY Bank Name is required.';
    if (!fcyBranchName) errors.fcyBranchName = 'FCY Branch Name is required.';
    if (!fcySwiftCode) errors.fcySwiftCode = 'FCY Swift Code is required.';
    if (!e_hajj_iban) errors.e_hajj_iban = 'E-Hajj IBAN is required.';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    validateFields(); // Validate fields immediately on input change
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    if (!validateFields()) {
      setLoading(false);
      return; // Exit if validation fails
    }

    const signupData = {
      accountName,
      name,
      email,
      phone,
      focalPerson,
      password,
      pkrIban,
      pkrAccountTitle,
      pkrBankName,
      pkrBranchName,
      pkrSwiftCode,
      fcyIban,
      fcyAccountTitle,
      fcyBankName,
      fcyBranchName,
      fcySwiftCode,
      e_hajj_iban
    };

    try {
      // Call signup API first
      const signupResponse = await axios.post('http://localhost:3000/signup-hgo', signupData);
      console.log('Signup successful:', signupResponse.data);
      setSuccessMessage('Signup successful! Your account is waiting for approval.');

   setTimeout(() => navigate('/'), 2000);
      // Call approve API after successful signup
      const approveResponse = await axios.post('http://localhost:3000/approve-hgo', {
        hgo_id: signupResponse.data.hgo_id // Use the ID returned from the signup response
      });

      console.log('HGO Approved:', approveResponse.data);
      setSuccessMessage('Signup and approval successful!');

      // Reset fields
      setAccountName("");
      setName("");
      setEmail("");
      setPhone("");
      setFocalPerson("");
      setPassword("");
      setPkrIban("");
      setPkrAccountTitle("");
      setPkrBankName(""); 
      setPkrBranchName("");
      setPkrSwiftCode("");
      setFcyIban("");
      setFcyAccountTitle("");
      setFcyBankName("");
      setFcyBranchName("");
      setFcySwiftCode("");
      setIban("");
      setFieldErrors({});

    } catch (error) {
      setError('Signup or approval failed. Please try again.');
      console.error('Error during signup/approval:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
        <div className="text-center mb-4">
          <img src="/assets/logo.png" alt="Logo" className="img-fluid logo" />
        </div>

        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label className='label-text'>Monazam Account Name</label>
            <select
              className={`form-control input-style ${fieldErrors.accountName ? 'border-danger' : ''}`}
              value={accountName}
              onChange={handleInputChange(setAccountName)}
            >
              <option value="">Select Company Name</option>
              {companies.length > 0 ? (
                companies.map((company, index) => (
                  <option key={index} value={company.company_name}>
                    {company.company_name}
                  </option>
                ))
              ) : (
                <option value="">No companies available</option>
              )}
            </select>
            {fieldErrors.accountName && <small className="text-danger">{fieldErrors.accountName}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>HGO Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.name ? 'border-danger' : ''}`}
              placeholder="HGO Name"
              value={name}
              onChange={handleInputChange(setName)}
            />
            {fieldErrors.name && <small className="text-danger">{fieldErrors.name}</small>}
          </div>
          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label className='label-text'>Email</label>
              <input
                type="email"
                className={`form-control input-style ${fieldErrors.email ? 'border-danger' : ''}`}
                placeholder="Email"
                value={email}
                onChange={handleInputChange(setEmail)}
              />
              {fieldErrors.email && <small className="text-danger">{fieldErrors.email}</small>}
            </div>
            <div className="w-50 ms-2">
              <label className='label-text'>Phone</label>
              <input
                type="tel"
                className={`form-control input-style ${fieldErrors.phone ? 'border-danger' : ''}`}
                placeholder="Phone Number"
                value={phone}
                onChange={handleInputChange(setPhone)}
              />
              {fieldErrors.phone && <small className="text-danger">{fieldErrors.phone}</small>}
            </div>
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>Focal Person</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.focalPerson ? 'border-danger' : ''}`}
              placeholder="Focal Person Name"
              value={focalPerson}
              onChange={handleInputChange(setFocalPerson)}
            />
            {fieldErrors.focalPerson && <small className="text-danger">{fieldErrors.focalPerson}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>Password</label>
            <div className="position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`form-control input-style ${fieldErrors.password ? 'border-danger' : ''}`}
                placeholder="Password"
                value={password}
                onChange={handleInputChange(setPassword)}
              />
              <span 
                className="position-absolute end-0 top-50 translate-middle-y me-2"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {fieldErrors.password && <small className="text-danger">{fieldErrors.password}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>PKR IBAN</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrIban ? 'border-danger' : ''}`}
              placeholder="PKR IBAN"
              value={pkrIban}
              onChange={handleInputChange(setPkrIban)}
            />
            {fieldErrors.pkrIban && <small className="text-danger">{fieldErrors.pkrIban}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>PKR Account Title</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrAccountTitle ? 'border-danger' : ''}`}
              placeholder="PKR Account Title"
              value={pkrAccountTitle}
              onChange={handleInputChange(setPkrAccountTitle)}
            />
            {fieldErrors.pkrAccountTitle && <small className="text-danger">{fieldErrors.pkrAccountTitle}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>PKR Bank Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrBankName ? 'border-danger' : ''}`}
              placeholder="PKR Bank Name"
              value={pkrBankName}
              onChange={handleInputChange(setPkrBankName)}
            />
            {fieldErrors.pkrBankName && <small className="text-danger">{fieldErrors.pkrBankName}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>PKR Branch Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrBranchName ? 'border-danger' : ''}`}
              placeholder="PKR Branch Name"
              value={pkrBranchName}
              onChange={handleInputChange(setPkrBranchName)}
            />
            {fieldErrors.pkrBranchName && <small className="text-danger">{fieldErrors.pkrBranchName}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>PKR Swift Code</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrSwiftCode ? 'border-danger' : ''}`}
              placeholder="PKR Swift Code"
              value={pkrSwiftCode}
              onChange={handleInputChange(setPkrSwiftCode)}
            />
            {fieldErrors.pkrSwiftCode && <small className="text-danger">{fieldErrors.pkrSwiftCode}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>FCY IBAN</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyIban ? 'border-danger' : ''}`}
              placeholder="FCY IBAN"
              value={fcyIban}
              onChange={handleInputChange(setFcyIban)}
            />
            {fieldErrors.fcyIban && <small className="text-danger">{fieldErrors.fcyIban}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>FCY Account Title</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyAccountTitle ? 'border-danger' : ''}`}
              placeholder="FCY Account Title"
              value={fcyAccountTitle}
              onChange={handleInputChange(setFcyAccountTitle)}
            />
            {fieldErrors.fcyAccountTitle && <small className="text-danger">{fieldErrors.fcyAccountTitle}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>FCY Bank Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyBankName ? 'border-danger' : ''}`}
              placeholder="FCY Bank Name"
              value={fcyBankName}
              onChange={handleInputChange(setFcyBankName)}
            />
            {fieldErrors.fcyBankName && <small className="text-danger">{fieldErrors.fcyBankName}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>FCY Branch Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyBranchName ? 'border-danger' : ''}`}
              placeholder="FCY Branch Name"
              value={fcyBranchName}
              onChange={handleInputChange(setFcyBranchName)}
            />
            {fieldErrors.fcyBranchName && <small className="text-danger">{fieldErrors.fcyBranchName}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>FCY Swift Code</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcySwiftCode ? 'border-danger' : ''}`}
              placeholder="FCY Swift Code"
              value={fcySwiftCode}
              onChange={handleInputChange(setFcySwiftCode)}
            />
            {fieldErrors.fcySwiftCode && <small className="text-danger">{fieldErrors.fcySwiftCode}</small>}
          </div>
          <div className="form-group mb-3">
            <label className='label-text'>E-Hajj IBAN</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.e_hajj_iban ? 'border-danger' : ''}`}
              placeholder="E-Hajj IBAN"
              value={e_hajj_iban}
              onChange={handleInputChange(setIban)}
            />
            {fieldErrors.e_hajj_iban && <small className="text-danger">{fieldErrors.e_hajj_iban}</small>}
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          {successMessage && <div className="text-success mb-3">{successMessage}</div>}
          <button 
            type="submit" 
            className="btn btn-primary w-100 green-btn label-text"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center mt-3">
          <span className='label-text'>Already have an account? </span>
          <a href="/" className="text-decoration-none lightgreen-txt">
            Login Here
          </a>
        </div>
      </div>
    </div>
  );
};


export default Signuphgo;
