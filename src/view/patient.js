import { useParams } from "react-router-dom";
import Navbar from "../view/nav";
import { useState, useEffect } from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";

export default function Patient() {
  const { id } = useParams();
  const { entities } = useJaneHopkins();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      const patientData = await entities.patient.get(id);
      setPatient(patientData);
    };

    fetchPatient();
  }, [entities.patient, id]);

  return (
    <>
      <Navbar />
      <h2>Patient - {id}</h2>
      <div className="container">
        <div className="box" id="top-left">
          <span className="list">
            <ul>
              <li>Patient Picture</li>
              <li>Name: {patient?.name}</li>
              <li>DOB: {patient?.dob}</li>
            </ul>
          </span>
        </div>
            <div className="box" id="top-right-1">
                <span className='list'>
                    <ul>
                        <li>Blood Type{patient?.bloodType}</li>
                    </ul>
                </span> 
            </div>
            <div className="box" id="top-right-2">
                <span className='list'>
                    <ul>
                        <li>Temperature</li>
                    </ul>
                </span>
            </div>
            <div className="box" id="top-right-3">
                <span className='list'>
                    <ul>
                        <li>Blood Pressure</li>
                    </ul>
                </span>
            </div>
            <div className="box" id="bottom-left">
                <span className='list'>
                    <ul>
                        <li>Height:</li>
                        <li>Weight:</li>
                        <li>UUID:</li>
                        <li>Insurance Number:</li>
                        <li>ICD Health code:</li>
                        <li>Oxygen Saturation:</li>
                        <li>Currently Insured:</li>
                    </ul>
                </span>
            </div>
            <div className="box" id="bottom-right">
                <span className='list' id=''>
                    <ul>
                        <li>Family History: </li>
                        <li>Address:</li>
                        <li>List of visit:</li>
                        <li>Allergies:</li>
                        <li>Current Medication:</li>
                    </ul>
                </span>
            </div>
        </div>
    </> 
    )
}