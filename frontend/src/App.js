import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HGOLogin from './Pages/HGO/Login';  
import HGOSignup from './Pages/HGO/Signup';  

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/hgo/login" element={<HGOLogin />} />
          <Route path="/hgo/signup" element={<HGOSignup />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;