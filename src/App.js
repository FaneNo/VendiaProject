import "./App.css";
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
import Bavaria from "./view/bavaria"
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" replace = {true}/>;
  };
  console.log(currentUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <RequireAuth>
                <Home />
              </RequireAuth>
            </>
          }
        />
        <Route path="/fda" element={<FDA />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/patient/:id"
          element={
            <RequireAuth>
              <Patient />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/doctor"
          element={
            <RequireAuth>
              <Doctor />
            </RequireAuth>
          }
        />
        <Route
          path="/new"
          element={
            <RequireAuth>
              <New />
            </RequireAuth>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <RequireAuth>
              <Edit />
            </RequireAuth>
          }
        />

        <Route path="/bavaria" element ={<Bavaria/>} />
      </Routes>
    </>
  );
}

export default App;
