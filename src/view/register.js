import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";
import Navbar from "./nav";

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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
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
          console.log("Navigating to home page");
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
      <form className="register-form" onSubmit={handleSubmit}>
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
<Navbar />
<BackgroundContainer backgroundColor="#f0f0f0">
<RegisterImage />
<RegisterForm />
</BackgroundContainer>
</>
);
}

export default Register;
