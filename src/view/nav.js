import { Link } from "react-router-dom";
import React from "react";
import Signout from "./logout";

function Navbar({ userType }) {
  return (
    <nav className="homeNav">
      <div className="homeImg">
        <Link to="/">
          <img
            className="vendiaLogo"
            src={require("../vendiaLogo.png")}
            alt="Vendia Logo"
          />
        </Link>
      </div>
      <div className="titleName">
        <Link to="/" className="titleN">
          Vendia Care
        </Link>
      </div>
      <ul className="navLinks">
        <div className="titleName">
          <Link to="/" className="titleN">
            Home
          </Link>
        </div>
        {userType === "patient" && (
          <li>
            <Link to="/patient">Patient</Link>
          </li>
        )}
        {/* { userType === 'doctor' && ( */}
        <li>
          <Link to="/doctor">Doctor</Link>
          </li>
          <li>
          <Link to="/new">New patient </Link>
        </li>
        {/* )} */}
        {/* {userType === "fda" && ( */}
          <li>
            <Link to="/fda">FDA</Link>
          </li>
          <li>
          <Link to="/bavaria">Bavaria</Link>
        </li>
        {/* )} */}
        {!(
          userType === "patient" ||
          userType === "doctor" ||
          userType === "fda"
        ) && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Signout />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
