import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

import Home from './routes/Home';
import Calculator from './routes/Calculator';
import Quote from './components/quote';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <nav className="navbar">
        <h1 className="navbar-title">Math Magicians</h1>
        <ul className="sections">
          <li className="section">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="section">
            <Link className="link" to="/calculator">Calculator</Link>
          </li>
          <li className="section">
            <Link className="link" to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <footer className="footer">
        &copy; 2023 Sebastian Hernandez, all rights reserved.
      </footer>
    </Router>
  </React.StrictMode>,
);
