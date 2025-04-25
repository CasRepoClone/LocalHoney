import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';  // Import SCSS file

// Import pages
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Faq from './pages/faq';
import About from './pages/about';
import PrivatePolicy from './pages/Privatepolicy'; // Import the Privacy Policy page
function App() {
  //return <HomePage/>;
  //return <ContactUs/>;
  // SPA SETUP to route without new html pages
  return (<Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacypolicy" element={<PrivatePolicy />} /> {/* Reusing About component for Privacy Policy */}
    </Routes>
  </Router>);
}

export default App;
