// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import PropertiesPage from './components/PropertiesPageByInternalId/PropertiesPage';
import ListingPage from './components/ListingPageByInternalId/ListingPage';
import Login from './components/Login/Login';
import './App.css';


const App = () => {
  return (
    <Router>
      <NavigationHeader />
      <Routes>
        <Route path="/testing-website" element={<HomePage />} />
        <Route path="/testing-website/contact" element={<ContactPage />} />
        <Route path="/testing-website/properties" element={<PropertiesPage />} />
        <Route path="/testing-website/properties/:id" element={<ListingPage />} />
        <Route path="/testing-website/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
