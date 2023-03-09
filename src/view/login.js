import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../view/home';
import {auth} from '../firebase-config';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';



function NavContainer() {
  return (
    <>
    <nav className="nav" id='loginNav'>
      <div className="homeImg">
        <Link to="/">
          <img className="vendiaLogo" src={require("../vendiaLogo.png")} />
        </Link>
      </div>
      <Link to="/" className="title" id='loginT'>Vendia Care</Link>
    </nav></>
  );
}

function BackgroundContainer(props) {
  return (
    <div className="backgroundL" style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
      </div>
  );
}

function Login() {
  return (
    <BackgroundContainer backgroundColor="#f0f0f0">
      <NavContainer />
      <LoginForm />
    </BackgroundContainer>
  );
}

export default Login;






