import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import UserDashboard from './user/UserDashboard/UserDashboard';

function App() {
  return (
    <div className="App">
   <Router>
<Routes>
<Route path="/" element={<Landing/>} />
<Route path="/dashboard" element={<UserDashboard/>} />
</Routes>
   </Router>
    </div>
  );
}

export default App;
