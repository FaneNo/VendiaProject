import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
<<<<<<< HEAD
import { auth } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";
=======
import { auth, db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";
>>>>>>> 4271918c7a806d4b2a4f0d2f17121a984feacdcd
import NavbarLR from "./navLR";

function RegisterImage() {
  return (
    <img className="register-image" src={require("../registerIMG.jpg")} alt="Login" />
  );
}

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
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
=======

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
>>>>>>> 4271918c7a806d4b2a4f0d2f17121a984feacdcd
    }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userRef = doc(db, "users", user.uid);
        setDoc(userRef, {
          name: formData.name,
          email: formData.email,
          role: formData.role,
        })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <h1>Register to Vendia Care</h1>
<<<<<<< HEAD
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
=======
      <form className="register-form" onSubmit={handleSubmit}>
>>>>>>> 4271918c7a806d4b2a4f0d2f17121a984feacdcd
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label >
        <br />
<<<<<<< HEAD
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
=======
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Password:
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Confirm password:
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Role:
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="">-- Select a role --</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="fda">FDA</option>
      </select>
    </label>
    <br />
    <button type="submit">Sign up</button>
  </form>
</div>
);
>>>>>>> 4271918c7a806d4b2a4f0d2f17121a984feacdcd
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
