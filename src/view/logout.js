import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
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
      <style>
        {`
          .logout-container {
            display: flex;
            justify-content: flex-end;
          }

          .logout-button {
            background-color: white;
            border-radius: 20px;
            cursor: pointer;
            font-size: 16px; /* decreased from 20px */
            padding: 3px 15px; /* added padding to compensate for smaller font */
            transition: background-color 0.3s ease-in-out;
          }          
          
          .logout-button:hover {
            background-color: #3e51aa;
          }
        `}
      </style>
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Signout;


