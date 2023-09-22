import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
   <Router>
<Routes>
<Route path="/" element={<Landing/>} />
</Routes>
   </Router>
    </div>
  );
}

export default App;
