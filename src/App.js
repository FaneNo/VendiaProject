import logo from './logo.svg';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';



function App() {
const {entities} = useJaneHopkins();

const addPatient = async() => {
  const addPatientResponse = await entities.patient.add({
    name: "billy",
    dob: "January 14, 2000",
    insuranceNumber: "32123",
  })
  console.log(addPatientResponse);
}

  return (
    <div className="App">
      <button onClick={() => {addPatient()}}>add patient</button>
    </div>
  );
}

export default App;
