import './App.css';
import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './customCSS.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">MERN Stack CRUD</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Examples</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Example</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  )
}

export default App;
