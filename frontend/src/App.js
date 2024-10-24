import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Login from './Pages/HGO/Authentication/Login';  
import Loginmain from './Pages/HGO/Authentication/Loginmain';
import Signupmain from './Pages/HGO/Authentication/Signupmain';
import SignupHgo from './Pages/HGO/Authentication/SignupHgo'; 
import SignupMonazam from './Pages/HGO/Authentication/SignupMonazam'; 
import ResetPassword from './Pages/HGO/Authentication/ResetPassword';
import ResetPassword1 from './Pages/HGO/Authentication/ResetPassword1'; 
import IncomingDashboard from './Pages/HGO/Dashboard/incoming/Incoming';
import OutgoingDashboard from './Pages/HGO/Dashboard/outgoing/Outgoing';
import MerchantDashboard from './Pages/HGO/Dashboard/merchant/Merchant';
import MonazamAccountDashboard  from './Pages/HGO/Dashboard/monazam_account/MonazamAccount';
import OpapDashboard  from './Pages/HGO/Dashboard/opap_account/OpapAccount';
import EhajjDashboard  from './Pages/HGO/Dashboard/EhajjAccountnew/EhajjAccount';
import ErrorPage from './Pages/HGO/Dashboard/common_components/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Loginmain />} />
           <Route path="/createaccount" element={<Signupmain />} />
          <Route path="/signuphgo" element={<SignupHgo />} />
            <Route path="/signupmonazam" element={<SignupMonazam />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetpassword1" element={<ResetPassword1 />} />
          <Route path="/incoming/:userType" element={<IncomingDashboard />} />
          <Route path="/outgoing/:userType" element={<OutgoingDashboard />} />
          <Route path="/merchant/:userType" element={<MerchantDashboard />} />
          <Route path="/monazamaccount/:userType" element={<MonazamAccountDashboard/>} />
          <Route path="/opap/:userType" element={<OpapDashboard/>} />
          <Route path="/ehajj/:userType" element={<EhajjDashboard/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;