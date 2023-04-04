import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import NavbarLR from "./navLR";

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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const registerFire = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user, userType);
  
      // Save user type to Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        userType: userType
      });
  
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className="register-container">
      <h1>Register to Vendia Care</h1>
      <form className="register-form" onSubmit={registerFire}>
      <label>
          User Type:
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="">Select user type</option>
            <option value="doctor">Doctor</option>
            <option value="fda">FDA</option>
            <option value="patient">Patient</option>
          </select>
        </label>
        <br />
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
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <br />
        <button type="submit" >
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
