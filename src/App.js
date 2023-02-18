import logo from './logo.svg';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';
import useBavaria from './hooks/useBavaria';
import useFDA from './hooks/useFDA';
// import NavBar from './view/home';
import { Component } from 'react';
import home from './view/home';
import fda from './view/fda';
import login from './view/login';
import patient from './view/patient';



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
  console.log(window.location);
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = home
      break
    case "/login": 
      Component = login
      break
    case "/fda":
      Component = fda
      break
    case "/patient":
      Component = patient
      break
  }
  
  return (
    <>
    <Component/>

    {/* <div className="App">
      <button onClick={() => { addPatient(); } }>add patient</button>
    </div> */}
    
    </>
     
  );
  
}

export default App;
