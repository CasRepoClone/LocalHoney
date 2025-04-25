import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';  // Import SCSS file

// Import pages
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';

function App() {
  //return <HomePage/>;
  //return <ContactUs/>;
  // SPA SETUP to route without new html pages
  return (<Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  </Router>);
}

export default App;
