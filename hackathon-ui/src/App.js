import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Landing from './components/Landing';

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
