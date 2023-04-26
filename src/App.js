import "./App.css";
import React, { Component, useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./view/home";
import FDA from "./view/fda";
import Login from "./view/login";
import Patient from "./view/patient";
import Register from "./view/register";
import Doctor from "./view/doctor";
import New from "./view/new";
import Edit from "./view/edit";
import Bavaria from "./view/bavaria";
import CreateDrug from "./view/createDrug";
import Admin from "./view/admin";
import PatientDrug from "./view/selectPatientDrug";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./view/firebase-config";
import { AuthContext } from "./context/AuthContext";
import { doc, getDoc } from "firebase/firestore";

//do linear gradient for background color

function App() {
  

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser  ? children : <Navigate to="/" />;
  };

  console.log(currentUser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route path="/fda" element={<RequireAuth><FDA /></RequireAuth>} />
        <Route path="/patient/:id" element={<RequireAuth><Patient /></RequireAuth>} />
        <Route path="/doctor" element={<RequireAuth><Doctor /></RequireAuth>} />
        <Route path="/new" element={<RequireAuth><New /></RequireAuth>} />
        <Route path="/edit/:id" element={<RequireAuth><Edit /></RequireAuth>} />
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
        <Route path="/bavaria" element={<RequireAuth><Bavaria /></RequireAuth>} />
        <Route path="/createDrug" element={<RequireAuth><CreateDrug /></RequireAuth>} />
        <Route path="/patientDrug/:id" element={<RequireAuth><PatientDrug /></RequireAuth>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
