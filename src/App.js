import logo from './logo.svg';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';
import useBavaria from './hooks/useBavaria';
import useFDA from './hooks/useFDA';
// import NavBar from './view/home';
import { Component } from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './view/home';
import FDA from './view/fda';
import Login from './view/login';
import Patient from './view/patient';
import Register from './view/register';
import Doctor from './view/doctor';


function App() {
// const {entities} = useJaneHopkins();

// const addPatient = async() => {
//   const addPatientResponse = await entities.patient.add({
//     name: "billy",
//     dob: "January 14, 2000",
//     insuranceNumber: "32123",
//   })
//   console.log(addPatientResponse);
// }

  return (
    <>
    
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/fda' element = {<FDA />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/patient' element = {<Patient />} />
      <Route path='/register' element = {<Register />} />
      <Route path='/doctor' element = {<Doctor />} />
    </Routes>
    

    {/* <div className="App">
      <button onClick={() => { addPatient(); } }>add patient</button>
    </div> */}
    
    </>
     
  );
  
}

export default App;
