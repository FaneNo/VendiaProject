import React, { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import NavbarLR from "../view/navLR";
import { useNavigate } from "react-router-dom";

function LoginImage() {
  return (
    <img className="login-image" src={require("../loginIMG.jpg")} alt="Login" />
  );
}

function LoginForm() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const registerLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      });
  };

  return (
    <div className="login-container">
      <h1>Login to Vendia Care</h1>
      <form className="login-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
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
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit" onClick={registerLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

function BackgroundContainer(props) {
  return (
    <div
      className="backgroundL"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </div>
  );
}

function Login() {
  return (
    <>
      <NavbarLR />
      <BackgroundContainer backgroundColor="#f0f0f0">
        <LoginImage />
        <LoginForm />
      </BackgroundContainer>
    </>
  );
}

export default Login;
