import { Link } from 'react-router-dom';
import React from 'react';

function HomeImage() {
  return (
    <img className="home-image" src={require("../homeIMG.png")} alt="Home" />
  );
}

function TextBox() {
  return (
    <div className="text-box">
      <h1>Welcome to Vendia Care</h1>
      <p>At Vendia Care, we strive to provide the highest quality healthcare services to our patients. Our team of experienced doctors and healthcare professionals are committed to improving the health and well-being of our patients.</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="backgroundHome" style={{ backgroundColor: '#e8dfdf' }}>
      <nav className="homeNav">
        <div className="homeImg">
          <Link to="/"><img className="vendiaLogo" src={require("../vendiaLogo.png")} /></Link>
        </div>
        <div className="titleName"><Link to="/" className="titleN">Vendia Care</Link></div>
        <ul>
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
            <Link to="/new">New patient</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <HomeImage />
        <TextBox />
      </div>
    </div>
  );
}




