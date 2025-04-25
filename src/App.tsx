import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';  // Import SCSS file
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
function App() {
  //return <HomePage/>;
  return <ContactUs/>;
  // SPA SETUP FOR LATER 
  //<Router>
  //    <Routes>
  //      <Route path="/" element={<Home />} />
  //      <Route path="/contact" element={<Contact />} />
  //    </Routes>
  //  </Router>
}

export default App;
