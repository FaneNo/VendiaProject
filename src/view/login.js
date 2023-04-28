import React, { useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import Navbar from "../view/nav";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { AuthContext } from "../context/AuthContext";
import { type } from "@testing-library/user-event/dist/type";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userDoc = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          localStorage.setItem("userType", userData.role);

          dispatch({type: "LOGIN", payload:user})
        }

        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in user:", error);
        setError("Incorrect email or password. Please try again.");
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
          {error && <div className="error">{error}</div>}
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
  const userType = localStorage.getItem("userType");

  return (
    <>
      <Navbar userType={userType} />
      <LoginForm />
    </>
  );
}

export default Login;
