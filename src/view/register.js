import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';


function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    const handleConfrimPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    };

    const registerFire = async () => {
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


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(`Signed in as ${user.email}`);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error(`Error: ${errorCode} - ${errorMessage}`);
//       });
//   };

  return (
      <div className="register-container">
        <h1>Register to Vendia Care</h1>
      <form className="register-form">
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
          <br />
          <label>
            Confirm Password:
          <input type="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfrimPasswordChange} />
          </label>
          <br />
        <button type="submit" onClick={registerFire}>Submit</button>
        </form>
    </div>
  );
}

function NavContainer() {
  return (
    <nav className="nav" id='regNav'>
      <div className="homeImg">
        <Link to="/">
          <img className="vendiaLogo" src={require("../vendiaLogo.png")} />
        </Link>
      </div>
      <Link to="/" className="title" id='regT'>Vendia Care</Link>
    </nav>
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
    <BackgroundContainer backgroundColor="#f0f0f0">
      <NavContainer />
      <RegisterForm />
    </BackgroundContainer>
  );
}

export default Register;
