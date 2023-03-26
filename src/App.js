import "./App.css";
import useJaneHopkins from "./hooks/useJaneHopkins";
import useBavaria from "./hooks/useBavaria";
import useFDA from "./hooks/useFDA";
import { Component, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./view/home";
import FDA from "./view/fda";
import Login from "./view/login";
import Patient from "./view/patient";
import Register from "./view/register";
import Doctor from "./view/doctor";
import New from "./view/new";
import Edit from "./view/edit";


function App() {
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
        <Route path="/fda" element={<FDA />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient/:id" element={<Patient />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>

      
    </>
  );
}

export default App;
