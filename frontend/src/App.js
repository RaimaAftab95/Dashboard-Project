import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HGOLogin from './Pages/HGO/Authentication/Login';  
import HGOSignup from './Pages/HGO/Authentication/Signup'; 
import HGOResetPassword from './Pages/HGO/Authentication/ResetPassword';
import HGOResetPassword1 from './Pages/HGO/Authentication/ResetPassword1'; 
import Dashboard from './Pages/HGO/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/hgo/login" element={<HGOLogin />} />
          <Route path="/hgo/signup" element={<HGOSignup />} />
          <Route path="/hgo/resetpassword" element={<HGOResetPassword />} />
          <Route path="/hgo/resetpassword1" element={<HGOResetPassword1 />} />
          <Route path="/hgo/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;