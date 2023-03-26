import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import NavbarLR from "./navLR";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

function RegisterImage() {
  return (
    <img className="register-image" src={require("../registerIMG.jpg")} alt="Login" />
  );
}


function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    const handleConfrimPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    };

  const registerFire = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
      <div className="register-container">
        <h1>Register to Vendia Care</h1>
      <form className="register-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={handleConfrimPasswordChange}
          />
        </label>
        <br />
        <button type="submit" onClick={registerFire}>
          Submit
        </button>
      </form>
    </div>
  );
}


function BackgroundContainer(props) {
  return (
    <div className="backgroundR" style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
      </div>
  );
}

function Register() {
  return (
    <>
    <NavbarLR />
    <BackgroundContainer backgroundColor="#f0f0f0">
      <RegisterImage />
      <RegisterForm />
    </BackgroundContainer>
    </>
  );
}

export default Register;