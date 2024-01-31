// src/components/NavigationHeader.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationHeader.css';

const NavigationHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Home
        </Link>
        <div className="nav-links">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
          <NavLink to="/properties" className="nav-link" activeClassName="active">
            Properties By Internal ID
          </NavLink>
        </div>
        <NavLink to="/login" className="nav-link" activeClassName="active">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default NavigationHeader;
