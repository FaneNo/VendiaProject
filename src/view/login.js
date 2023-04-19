import React, { useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import Navbar from "../view/nav";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";


function LoginForm() {
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
});


  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();



    signInWithEmailAndPassword(auth, formData.email, formData.password)
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
  <div className="login-container">
    <div className="login-form">
    <div className="login-image">
      <img src={require("../loginIMG.jpg")} alt="Login" />
    </div>
    <form className="login-box" onSubmit={handleSubmit}>
      <h1>Login to Vendia Care</h1>
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
      <button className="buttonL" type="submit">
        Login
      </button>
    </form>
  </div>
  </div>
);

}

function Login() {
  return (
    <>
      <Navbar />
        <LoginForm />
    </>
  );
}

export default Login;
