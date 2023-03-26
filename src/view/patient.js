import { json, useParams, useNavigate } from "react-router-dom";
import Navbar from "../view/nav";
import { useState, useEffect } from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";

export default function Patient() {
  const { id } = useParams();
  const { entities } = useJaneHopkins();
  const [patient, setPatient] = useState();
  const fetchPatient = async () => {
    const patientData = await entities.patient.get(id);
    setPatient(patientData);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchPatient();
  }, [entities.patient, id]);

  return (
    <>
      <Navbar />
      <h2>Patient - {id}</h2>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => navigate(`/edit/${patient._id}`)}
      >
        Update
      </button>
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
          <span className="list">
            <ul>
              <li>Blood Type: {patient?.bloodType}</li>
            </ul>
          </span>
        </div>
        <div className="box" id="top-right-2">
          <span className="list">
            <ul>
              <li>Temperature {patient?.temperature}</li>
            </ul>
          </span>
        </div>
        <div className="box" id="top-right-3">
          <span className="list">
            <ul>
              <li>Blood Pressure {patient?.bloodPressure}</li>
            </ul>
          </span>
        </div>
        <div className="box" id="bottom-left">
          <span className="list">
            <ul>
              <li>Height: {patient?.height}</li>
              <li>Weight:{patient?.weight}</li>
              <li>UUID: {patient?.uuid}</li>
              <li>Insurance Number:{patient?.insuranceNumber}</li>
              <li>ICD Health code: {patient?.icdHealthCodes[0].code}</li>
              <li>Oxygen Saturation:{patient?.oxygenSaturation}</li>
              <li>Currently Insured: {patient?.currentlyInsured}</li>
              <li>Currently Employed: {patient?.currentlyEmployed}</li>
            </ul>
          </span>
        </div>
        <div className="box" id="bottom-right">
          <span className="list" id="">
            <ul>
              <li>Family History:{patient?.familyHistory}</li>
              <li>Address: {patient?.address}</li>
              <li>List of visit:</li>
              <li>Allergies: {patient?.allergies[0].allergy}</li>
              <li>
                Current Medication: {patient?.currentMedications[0].medication}
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
