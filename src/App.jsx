// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import PropertiesPageByInternalId from './components/PropertiesPageByInternalId/PropertiesPageByInternalId';
import ListingPageByInternalId from './components/ListingPageByInternalId/ListingPageByInternalId';
import PropertiesPageByAddress from './components/PropertiesPageByAddress/PropertiesPageByAddress';
import ListingPageByAddress from './components/ListingPageByAddress/ListingPageByAddress';
import PropertiesPageByAddressMls from './components/PropertiesPageByAddressMls/PropertiesPageByAddressMls';
import ListingPageByAddressMls from './components/ListingPageByAddressMls/ListingPageByAddressMls';
import Login from './components/Login/Login';
import './App.css';


const App = () => {
  return (
    <Router>
      <NavigationHeader />
      <Routes>
        <Route path="/testing-website" element={<HomePage />} />
        <Route path="/testing-website/contact" element={<ContactPage />} />
        <Route path="/testing-website/properties-id" element={<PropertiesPageByInternalId />} />
        <Route path="/testing-website/properties-id/:id" element={<ListingPageByInternalId />} />
        <Route path="/testing-website/properties-address" element={<PropertiesPageByAddress />} />
        <Route path="/testing-website/properties-address/:address" element={<ListingPageByAddress />} />
        <Route path="/testing-website/properties-address-mls" element={<PropertiesPageByAddressMls />} />
        <Route path="/testing-website/properties-address-mls/:addressmls" element={<ListingPageByAddressMls />} />
        <Route path="/testing-website/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
