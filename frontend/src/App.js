import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HGOLogin from './Pages/HGO/Login';  
import HGOSignup from './Pages/HGO/Signup'; 
import HGOResetPassword from './Pages/HGO/ResetPassword';
import HGOResetPassword1 from './Pages/HGO/ResetPassword1' ;  

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/hgo/login" element={<HGOLogin />} />
          <Route path="/hgo/signup" element={<HGOSignup />} />
          <Route path="/hgo/resetpassword" element={<HGOResetPassword />} />
          <Route path="/hgo/resetpassword1" element={<HGOResetPassword1 />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;