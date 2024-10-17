import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Pages/HGO/Authentication/Login';  
import Signup from './Pages/HGO/Authentication/Signup'; 
import ResetPassword from './Pages/HGO/Authentication/ResetPassword';
import ResetPassword1 from './Pages/HGO/Authentication/ResetPassword1'; 
import IncomingDashboard from './Pages/HGO/Dashboard/incoming/Incoming';
import OutgoingDashboard from './Pages/HGO/Dashboard/outgoing/Outgoing';
import MerchantDashboard from './Pages/HGO/Dashboard/merchant/Merchant';
import MonazamAccountDashboard  from './Pages/HGO/Dashboard/monazam_account/MonazamAccount';
import OpapDashboard  from './Pages/HGO/Dashboard/opap_account/OpapAccount';
import OpapTransferDashboard  from './Pages/HGO/Dashboard/opaptransfer/OpapTransfer';
// import EhajjDashboard  from './Pages/HGO/Dashboard/ehajj_account/Ehajj';
import EhajjDashboard  from './Pages/HGO/Dashboard/EhajjAccountnew/EhajjAccount';
import EhajjTransferDashboard  from './Pages/HGO/Dashboard/ehajjtransfer/EhajjTransfer';
import MonazamAccountTransfer  from './Pages/HGO/Dashboard/monazamAccounttransfer/MonazamAccTransfer';
import ErrorPage from './Pages/HGO/Dashboard/common_components/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetpassword1" element={<ResetPassword1 />} />
          <Route path="/incoming" element={<IncomingDashboard />} />
          <Route path="/outgoing" element={<OutgoingDashboard />} />
          <Route path="/merchant" element={<MerchantDashboard />} />
          <Route path="/monazamaccount" element={<MonazamAccountDashboard/>} />
          <Route path="/monazamaccounttransfer" element={<MonazamAccountTransfer/>} />
          <Route path="/opap" element={<OpapDashboard/>} />
          <Route path="/opaptransfer" element={<OpapTransferDashboard/>} />
          <Route path="/ehajj" element={<EhajjDashboard/>} />
          <Route path="/ehajjtransfer" element={<EhajjTransferDashboard/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;