import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [focalPerson, setFocalPerson] = useState('');
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
  const [e_hajj_iban, setIban] = useState('');

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Error states for validation
  const [fieldErrors, setFieldErrors] = useState({
    accountName: false,
    email: false,
    phone: false,
    focalPerson: false,
    newPassword: false,
    pkrIban: false,
    pkrAccountTitle: false,
    pkrBankName: false,
    pkrBranchName: false,
    pkrSwiftCode: false,
    fcyIban: false,
    fcyAccountTitle: false,
    fcyBankName: false,
    fcyBranchName: false,
    fcySwiftCode: false,
    e_hajj_iban: false,
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
    if (!accountName) errors.accountName = true;
    if (!email) errors.email = true;
    if (!phone.match(/^[+]?[0-9]{10,15}$/)) errors.phone = true; // Validate phone
    if (!focalPerson) errors.focalPerson = true;
    if (newPassword.length < 6) errors.newPassword = true; // Validate password length
    if (!pkrIban.match(/^[A-Za-z0-9]+$/)) errors.pkrIban = true; // Validate PKR IBAN
    if (!pkrAccountTitle) errors.pkrAccountTitle = true;
    if (!pkrBankName) errors.pkrBankName = true;
    if (!pkrBranchName) errors.pkrBranchName = true;
    if (!pkrSwiftCode) errors.pkrSwiftCode = true;
    if (!fcyIban.match(/^[A-Za-z0-9]+$/)) errors.fcyIban = true; // Validate FCY IBAN
    if (!fcyAccountTitle) errors.fcyAccountTitle = true;
    if (!fcyBankName) errors.fcyBankName = true;
    if (!fcyBranchName) errors.fcyBranchName = true;
    if (!fcySwiftCode) errors.fcySwiftCode = true;
    if (!e_hajj_iban) errors.e_hajj_iban = true;

    setFieldErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!validateFields()) {
      setLoading(false);
      return; // Exit if validation fails
    }
  
    const signupData = {
      accountName,
      email,
      phone,
      focalPerson,
      newPassword,
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
      e_hajj_iban,
    };
  
    try {
      const response = await axios.post('http://localhost:3000/api/signupmonazam', signupData);
      setSuccessMessage('Signup successful!');
      console.log('Signup successful:', response.data);
      setLoading(false);
  
      // Clear the form fields
      setAccountName('');
      setEmail('');
      setPhone('');
      setFocalPerson('');
      setNewPassword('');
      setPkrIban('');
      setPkrAccountTitle('');
      setPkrBankName('');
      setPkrBranchName('');
      setPkrSwiftCode('');
      setFcyIban('');
      setFcyAccountTitle('');
      setFcyBankName('');
      setFcyBranchName('');
      setFcySwiftCode('');
      setIban('');
      setFieldErrors({});
  
      setTimeout(() => {
        navigate('/'); 
      }, 2000); 
  
    } catch (error) {
      // Check if the error response exists
      if (error.response) {
        // Extract the error message from the response
        setError(error.response.data.message || 'Signup failed. Please try again.');
        console.error('Signup failed:', error.response.data); // Log full error response for debugging
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your internet connection.');
        console.error('No response:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('An unexpected error occurred. Please try again.');
        console.error('Error:', error.message);
      }
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
              onChange={(e) => setAccountName(e.target.value)}
            >
              <option value="">Select Company Name</option>
              {companies && companies.length > 0 ? (
                companies.map((company, index) => (
                  <option key={index} value={company.company_name}>
                    {company.company_name}
                  </option>
                ))
              ) : (
                <option value="">No companies available</option>
              )}
            </select>
          </div>

          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-50 me-2">
              <label className='label-text'>Email</label>
              <input
                type="email"
                className={`form-control input-style ${fieldErrors.email ? 'border-danger' : ''}`}
                placeholder="ali@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-50 ms-2">
              <label className='label-text'>Phone Number</label>
              <input
                type="tel"
                className={`form-control input-style ${fieldErrors.phone ? 'border-danger' : ''}`}
                placeholder="(+237)696 88 77 55"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>Focal Person</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.focalPerson ? 'border-danger' : ''}`}
              placeholder="Name"
              value={focalPerson}
              onChange={(e) => setFocalPerson(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 position-relative">
            <label className='label-text'>New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className={`form-control input-style ${fieldErrors.newPassword ? 'border-danger' : ''}`}
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)} className='eye-icon'>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR IBAN</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrIban ? 'border-danger' : ''}`}
              placeholder="PKR IBAN"
              value={pkrIban}
              onChange={(e) => setPkrIban(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR Account Title</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrAccountTitle ? 'border-danger' : ''}`}
              placeholder="Account Title"
              value={pkrAccountTitle}
              onChange={(e) => setPkrAccountTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR Bank Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrBankName ? 'border-danger' : ''}`}
              placeholder="Bank Name"
              value={pkrBankName}
              onChange={(e) => setPkrBankName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR Branch Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrBranchName ? 'border-danger' : ''}`}
              placeholder="Branch Name"
              value={pkrBranchName}
              onChange={(e) => setPkrBranchName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>PKR Swift Code</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.pkrSwiftCode ? 'border-danger' : ''}`}
              placeholder="Swift Code"
              value={pkrSwiftCode}
              onChange={(e) => setPkrSwiftCode(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>FCY IBAN</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyIban ? 'border-danger' : ''}`}
              placeholder="FCY IBAN"
              value={fcyIban}
              onChange={(e) => setFcyIban(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>FCY Account Title</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyAccountTitle ? 'border-danger' : ''}`}
              placeholder="Account Title"
              value={fcyAccountTitle}
              onChange={(e) => setFcyAccountTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>FCY Bank Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyBankName ? 'border-danger' : ''}`}
              placeholder="Bank Name"
              value={fcyBankName}
              onChange={(e) => setFcyBankName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>FCY Branch Name</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcyBranchName ? 'border-danger' : ''}`}
              placeholder="Branch Name"
              value={fcyBranchName}
              onChange={(e) => setFcyBranchName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>FCY Swift Code</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.fcySwiftCode ? 'border-danger' : ''}`}
              placeholder="Swift Code"
              value={fcySwiftCode}
              onChange={(e) => setFcySwiftCode(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label className='label-text'>E-hajj IBAN</label>
            <input
              type="text"
              className={`form-control input-style ${fieldErrors.e_hajj_iban ? 'border-danger' : ''}`}
              placeholder="IBAN"
              value={e_hajj_iban}
              onChange={(e) => setIban(e.target.value)}
            />
          </div>

          {error && <div className="text-danger">{error}</div>}
          {successMessage && <div className="text-success">{successMessage}</div>}

          <button type="submit" className="btn btn-primary w-100 green-btn label-text" disabled={loading}>
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

export default Signup;
