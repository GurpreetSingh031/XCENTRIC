import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WebDevelopment from './components/Services/WebDevelopment';
import AppDevelopment from './components/Services/AppDevelopment';
import DigitalMarketing from './components/Services/DigitalMarketing';
import LegalServices from './components/Services/LegalServices';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/legal-services" element={<LegalServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
