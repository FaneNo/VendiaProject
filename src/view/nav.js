import { Link } from 'react-router-dom';
import React from 'react';
import patient from './patient';

function Navbar() {
  return (
    <nav className="homeNav">
      <div className="homeImg">
        <Link to="/">
          <img className="vendiaLogo" src={require("../vendiaLogo.png")} alt="Vendia Logo" />
        </Link>
      </div>
      <div className="titleName">
        <Link to="/" className="titleN">Vendia Care</Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/fda">FDA</Link>
        </li>
        <li>
          <Link to="/patient">Patient</Link>
        </li>
        <li>
          <Link to="/doctor">Doctor</Link>
        </li>
        <li>
          <Link to="/new">New patient </Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
