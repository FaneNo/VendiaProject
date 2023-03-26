import { Link } from "react-router-dom";
import React from "react";

function NavbarLR() {
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
    </nav>
  );
}

export default NavbarLR;
