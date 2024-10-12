import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HGOLogin from './Pages/HGO/Authentication/Login';  
import HGOSignup from './Pages/HGO/Authentication/Signup'; 
import HGOResetPassword from './Pages/HGO/Authentication/ResetPassword';
import HGOResetPassword1 from './Pages/HGO/Authentication/ResetPassword1'; 
import IncomingDashboard from './Pages/HGO/Dashboard/incoming/Incoming';
import OutgoingDashboard from './Pages/HGO/Dashboard/outgoing/Outgoing';
import MerchantDashboard from './Pages/HGO/Dashboard/merchant/Merchant';
import MonazamAccountDashboard  from './Pages/HGO/Dashboard/monazam_account/MonazamAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HGOLogin />} />
          <Route path="/hgo/signup" element={<HGOSignup />} />
          <Route path="/hgo/resetpassword" element={<HGOResetPassword />} />
          <Route path="/hgo/resetpassword1" element={<HGOResetPassword1 />} />
          <Route path="/hgo/incoming" element={<IncomingDashboard />} />
          <Route path="/hgo/outgoing" element={<OutgoingDashboard />} />
          <Route path="/hgo/merchant" element={<MerchantDashboard />} />
          <Route path="/hgo/monazamaccount" element={<MonazamAccountDashboard/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;