import React, { useState } from "react";
import { auth, db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Signout from "./logout";

function Navbar() {
  const [userRole, setUserRole] = useState("");

  // Check user's role
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userDoc = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDoc);
  
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserRole(userData.role);
      }
    } else {
      setUserRole("");
    }
  });

  return (
    <nav className="homeNav">
      <div className="homeImg">
        <Link to="/">
          <img
            className="vendiaLogo"
            src={require("../vendiaLogo.png")}
            alt="Vendia Logo"
          />
        </Link>
      </div>
      <div className="titleName">
        <Link to="/" className="titleN">
          Vendia Care
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          {userRole === "doctor" && (
            <>
              <li>
              <Link to="/doctor">Doctor</Link>
            </li>
            <li>
              <Link to="/new">New Patient</Link>
            </li>
            </>
          )}
          {userRole === "fda" && (
            <Link to="/fda">FDA</Link>
          )}
          {userRole === "patient" && (
            <Link to="/patient">Patient</Link>
          )}
        </li>
        {userRole === "" && (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {userRole !== "" && (
          <li>
            <Signout />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;



