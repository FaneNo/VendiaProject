import React, { useContext, useEffect } from "react";
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
import { AuthContext } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./view/firebase-config";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          // Set the current user data in your AuthContext
        }
      } else {
        // Set the current user data to null in your AuthContext
      }
    });

    return unsubscribe;
  }, []);

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
