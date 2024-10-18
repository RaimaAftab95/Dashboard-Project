import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Pages/HGO/Authentication/Login';  
import Loginmain from './Pages/HGO/Authentication/Loginmain';
import Signupmain from './Pages/HGO/Authentication/Signupmain';
import Signup from './Pages/HGO/Authentication/Signup'; 
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
          <Route path="/" element={<Login />} />
          <Route path="/loginmain" element={<Loginmain />} />
           <Route path="/signupmain" element={<Signupmain />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetpassword1" element={<ResetPassword1 />} />
          <Route path="/incoming" element={<IncomingDashboard />} />
          <Route path="/outgoing" element={<OutgoingDashboard />} />
          <Route path="/merchant" element={<MerchantDashboard />} />
          <Route path="/monazamaccount" element={<MonazamAccountDashboard/>} />
          <Route path="/opap" element={<OpapDashboard/>} />
          <Route path="/ehajj" element={<EhajjDashboard/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;