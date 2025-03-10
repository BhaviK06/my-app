import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header style={{ backgroundColor: "black", color: "white", padding: "10px", textAlign: "center" }}>
          <h1>Welcome to React Router</h1>
        </header>

        <nav style={{ textAlign: "center", margin: "10px" }}>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
        </nav>

        <div style={{ textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
