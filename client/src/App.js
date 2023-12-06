import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';
import {Form} from './pages/Form';
import Templates from './pages/Templates';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
        <Route path='/signup' index element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App;
