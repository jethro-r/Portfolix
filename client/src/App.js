import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Homepage/>}/>
        <Route path="/templates/complex" element={<Portfolio/>}/>
      </Routes>
    </Router>
  )
}

export default App;
