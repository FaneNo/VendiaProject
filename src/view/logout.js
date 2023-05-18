import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

const Signout = () => {
 
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then( async () => {
        
        // Sign-out successful.
        localStorage.setItem("user", null); //if something break remove this
        localStorage.setItem("userType", null);
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <>

      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Signout;


