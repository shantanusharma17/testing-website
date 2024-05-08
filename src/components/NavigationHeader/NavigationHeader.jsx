// src/components/NavigationHeader.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationHeader.css';

const NavigationHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/testing-website" className="logo">
          Home
        </Link>
        <div className="nav-links">
          <NavLink to="/testing-website/contact" className="nav-link" activeclassname="active">
            Contact
          </NavLink>
          <NavLink to="/testing-website/properties" className="nav-link" activeclassname="active">
            Properties
          </NavLink>
          <NavLink to="/testing-website/listings" className="nav-link" activeclassname="active">
            Listings
          </NavLink>
          {/*<NavLink to="/testing-website/properties-address-mls" className="nav-link" activeclassname="active">*/}
          {/*  Properties By Address + MLS*/}
          {/*</NavLink>*/}
        </div>
        <NavLink to="/testing-website/login" className="nav-link" activeclassname="active">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default NavigationHeader;
