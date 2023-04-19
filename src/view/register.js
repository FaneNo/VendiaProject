import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";
import Navbar from "./nav";

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
      <div className="register-form">
        <div className="register-image">
          <img src={require("../registerIMG.jpg")} alt="Login" />
        </div>
        <form className="register-box" onSubmit={handleSubmit}>
          <h1>Register to Vendia Care</h1>
          <label>
            User Type:
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">--Select user type--</option>
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
              value={formData.email}
              required
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
              required
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              required
              onChange={handleChange}
            />
          </label>
          <br />
          <div className="divR">
            <button className="buttonR" type="submit">
              Submit
            </button>
          </div>
        </form>
        
      </div>
      
    </div>
  );
}

function Register() {
  return (
    <>
      <Navbar />
      <RegisterForm />
    </>
  );
}

export default Register;
