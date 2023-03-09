import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const registerLogin = async () => {
    try {
    const user = createUserWithEmailAndPassword(
        auth, 
        email, 
        password
        );
    console.log(user)
    } catch (error) {
        console.log(error.message);
    }
};

  return (
      <div className="login-container">
        <h1>Login to Vendia Care</h1>
      <form className="login-form">
          <label>
            Email:
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
        <button type="submit" onClick={registerLogin}>Login</button>
        </form>
    </div>
  );
}

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







