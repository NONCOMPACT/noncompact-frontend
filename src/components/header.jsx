import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-noncompact.svg';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container d-flex flex-column flex-lg-row justify-content-between">
        {/* logo */}
        <Link to="/" className="navbar-brand page-scroll header-logo">
          <img
            src={logo}
            className="app-logo"
            alt="NONCOMPACT"
            loading="lazy"
          />
        </Link>
        {/* navigation */}
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/team"
                className={`nav-link ${
                  currentPath === '/team' ? 'active' : ''
                }`}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/study"
                className={`nav-link ${
                  currentPath === '/study' ? 'active' : ''
                }`}
              >
                The Study
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  currentPath === '/contact' ? 'active' : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
