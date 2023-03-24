
import { json, useParams, useNavigate } from "react-router-dom";
import Navbar from "../view/nav";
import { useState, useEffect } from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";

export default function Patient() {
  const { id } = useParams();
  const { entities } = useJaneHopkins();
  const [patient, setPatient] = useState({});
  const fetchPatient = async () => {
    const patientData = await entities.patient.get(id);
    setPatient(patientData);

  };
  const navigate = useNavigate();

  const handleUpdate = async (e) =>{
    e.preventDefault();
    const { _owner, ...product } = patient;
    const updateProductResponse = await entities.patient.update(product);
    console.log(updateProductResponse);
    setPatient(updateProductResponse);
    navigate(`/patient/${patient._id}`);
  } 

  useEffect(() => {
    fetchPatient();
    
  }, [entities.patient, id]);

  


  return (
    <>
      <Navbar />
      <h2>Patient - {id}</h2>
      <form onSubmit={handleUpdate}>
      <div className="container">
        <div className="box" id="top-left">
            <span className="list">
                <ul>
                    <li>Patient Picture</li>
                    <li>Name: <input type={'text'} className=" height form-control" value={patient?.name || ''} onChange = {(e) => setPatient({...patient, name: e.target.value})} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input></li>
                    <li>DOB: {patient?.dob}</li>
                </ul>
            </span>
        </div>
        <div className="box" id="top-right-1">
            <span className='list'>
                <ul>
                    <li>Blood Type: {patient?.bloodType}</li>
                </ul>
            </span> 
        </div>
            <div className="box" id="top-right-2">
                <span className='list'>
                    <ul>
                        <li>Temperature {patient?.temperature}</li>
                    </ul>
                </span>
            </div>
            <div className="box" id="top-right-3">
                <span className='list'>
                    <ul>
                        <li>Blood Pressure {patient?.bloodPressure}</li>
                    </ul>
                </span>
            </div>
            <div className="box" id="bottom-left">
                <span className='list'>
                    <ul>
                        <li>Height: <input type={'text'} className=" height form-control" value={patient?.height || ''} onChange = {(e) => setPatient({...patient, height: e.target.value})} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input></li>
                        <li>Weight:{patient?.weight}</li>
                        <li>UUID: {patient?.uuid}</li>
                        <li>Insurance Number:{patient?.insuranceNumber}</li>
                        <li>ICD Health code: {patient?.icdHealthCodes && patient.icdHealthCodes.length > 0 ? patient?.icdHealthCodes[0].code : ""}</li>
                        <li>Oxygen Saturation:{patient?.oxygenSaturation}</li>
                        <li>Currently Insured: {patient?.currentlyInsured}</li>
                    </ul>
                </span>
            </div>
            <div className="box" id="bottom-right">
                <span className='list' id=''>
                    <ul>
                        <li>Family History:{patient?.familyHistory}</li>
                        <li>Address: {patient?.address}</li>
                        <li>List of visit:</li>
                        <li>Allergies: {patient?.allergies && patient.allergies.length > 0 ? patient.allergies[0].allergy : ""}</li>
                        <li>Current Medication: {patient?.medication && patient.medication.length > 0 ? patient?.currentMedications[0].medication : ""}</li>
                    </ul>
                </span>
            </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"></input>
    
        </form>
    </> 
    )
}