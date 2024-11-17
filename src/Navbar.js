// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { ArrowLeft, House } from 'react-bootstrap-icons';

const Navbar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#/">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="Logo"
            width="30"
            height="30"
          />
          <span className="ms-2">English Words</span>
        </a>
        <div className="d-flex">
          <button className="btn btn-secondary me-2" onClick={handleBack}>
            <ArrowLeft />
          </button>
          <button className="btn btn-primary" onClick={handleHome}>
            <House />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
