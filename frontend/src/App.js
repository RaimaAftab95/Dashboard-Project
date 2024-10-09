import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HGOLogin from './Pages/HGO/Authentication/Login';  
import HGOSignup from './Pages/HGO/Authentication/Signup'; 
import HGOResetPassword from './Pages/HGO/Authentication/ResetPassword';
import HGOResetPassword1 from './Pages/HGO/Authentication/ResetPassword1'; 
import IncomingDashboard from './Pages/HGO/Dashboard/IncomingDashboard';
import OutgoingDashboard from './Pages/HGO/Dashboard2/OutgoingDashboard';
import MerchantDashboard from './Pages/HGO/Dashboard3/MerchantDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/hgo/login" element={<HGOLogin />} />
          <Route path="/hgo/signup" element={<HGOSignup />} />
          <Route path="/hgo/resetpassword" element={<HGOResetPassword />} />
          <Route path="/hgo/resetpassword1" element={<HGOResetPassword1 />} />
          <Route path="/hgo/dashboard1" element={<IncomingDashboard />} />
          <Route path="/hgo/dashboard2" element={<OutgoingDashboard />} />
          <Route path="/hgo/dashboard3" element={<MerchantDashboard />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;