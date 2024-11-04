import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../LOGO.png';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Xcentric Logo" className="navbar-logo" />
        <Link to="/" className="navbar-title">Xcentric</Link>
      </div>
      <nav>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/web-development">Web Development</Link></li>
          <li><Link to="/app-development">App Development</Link></li>
          <li><Link to="/digital-marketing">Digital Marketing</Link></li>
          <li><Link to="/legal-services">Legal Services</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
