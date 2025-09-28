
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Current Affairs
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/daily-current-affairs" className="navbar-item">
            Daily Current Affairs
          </Link>
          <Link to="/mcq" className="navbar-item">
            MCQ
          </Link>
          <Link to="/ministers" className="navbar-item">
            Ministers
          </Link>
          <Link to="/state-and-capitals" className="navbar-item">
            State and Capitals
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
