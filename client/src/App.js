import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';
import {Form} from './pages/Form';
import Templates from './pages/Templates';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Homepage/>}/>
        <Route path="/form" index element={<Form/>}/>
        <Route path="/templates/complex" element={<Portfolio/>}/>
        <Route path="/templates" index element={<Templates/>}/>
        <Route path="/dashboard" index element={<Dashboard/>}/>
        <Route path='/login' index element={<Login/>}/>
        <Route path='/register' index element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App;
