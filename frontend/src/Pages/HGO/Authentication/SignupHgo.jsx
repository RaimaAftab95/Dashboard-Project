import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const Signup = () => {
  const [accountName, setAccountName] = useState('');
  const [hgoname, setHgoName] = useState('');
  const [hgoenrollment, setEnrollment] = useState('');
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
  const [e_hajj_iban, setIban] = useState('');

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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


  const handleSignup = async (e) => {
    e.preventDefault();
    
    const signupData = {
      accountName,
      hgoname,
      hgoenrollment,
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
      e_hajj_iban
    };

    try {
      const response = await axios.post('http://localhost:3000/api/signup', signupData);
      setSuccessMessage('Signup successful!');
      console.log('Signup successful:', response.data);
      setLoading(false);
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.error('Signup failed:', error);
      setLoading(false);
    }
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

      
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label className='label-text'>Monazam Account Name</label>
            <select
              className="form-control input-style"
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

       <div className="form-group mb-3">
            <label className='label-text'>HGO Name</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Hgo name"
              value={hgoname}
              onChange={(e) => setHgoName(e.target.value)}
            />
          </div>

  <div className="form-group mb-3">
            <label className='label-text'>Enrolment Number</label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="For Ex:0000"
              value={hgoenrollment}
              onChange={(e) => setEnrollment(e.target.value)}
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
              value={e_hajj_iban}
              onChange={(e) => setIban(e.target.value)}
            />
          </div>

 {/* Success or error messages */}
          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}

          <button type="submit" className="btn btn-primary w-100 green-btn label-text"  disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign-Up'}
        
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
