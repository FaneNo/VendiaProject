import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../view/nav";
import { useState, useEffect } from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";
import Button from '@mui/material/Button';




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
      <div className="containerP2">
      <div className="containerP1">
        <div class="containerP">
          <div class="box" id="top-left">
            <span class="list">
              <ul>
                
                <li>
                  Name: <span class="patient-info">{patient?.name}</span>
                </li>
                <li>
                  DOB: <span class="patient-info">{patient?.dob}</span>
                </li>
              </ul>
            </span>
          </div>
          <div class="box" id="top-right-1">
            <span class="list">
              <ul>
                <li>
                  Blood Type:{" "}
                  <span class="patient-info">{patient?.bloodType}</span>
                </li>
              </ul>
            </span>
          </div>
          <div class="box" id="top-right-2">
            <span class="list">
              <ul>
                <li>
                  Temperature:{" "}
                  <span class="patient-info">{patient?.temperature}</span>
                </li>
              </ul>
            </span>
          </div>
          <div class="box" id="top-right-3">
            <span class="list">
              <ul>
                <li>
                  Blood Pressure:{" "}
                  <span class="patient-info">{patient?.bloodPressure}</span>
                </li>
              </ul>
            </span>
          </div>
          <div class="box" id="bottom-left">
            <span class="list">
              <ul>
                <li>
                  Height: <span class="patient-info">{patient?.height}</span>
                </li>
                <li>
                  Weight: <span class="patient-info">{patient?.weight}</span>
                </li>
                <li>
                  UUID: <span class="patient-info">{patient?.uuid}</span>
                </li>
                <li>
                  Insurance Number:{" "}
                  <span class="patient-info">{patient?.insuranceNumber}</span>
                </li>
                <li>
                  ICD Health code:{" "}
                  <span class="patient-info">
                    {patient?.icdHealthCodes[0].code}
                  </span>
                </li>
                <li>
                  Oxygen Saturation:{" "}
                  <span class="patient-info">{patient?.oxygenSaturation}</span>
                </li>
                <li>
                  Currently Insured:{" "}
                  <span class="patient-info">{patient?.currentlyInsured}</span>
                </li>
                <li>
                  Allergies:{" "}
                  <span class="patient-info">
                    {patient?.allergies[0].allergy}
                  </span>
                </li>
                <li>
                  Address: <span class="patient-info">{patient?.address}</span>
                </li>
              </ul>
            </span>
          </div>
          <div class="box" id="bottom-right">
            <span class="list" >
              <ul>
                <li>
                  Family History:{" "}
                  <span class="patient-info">{patient?.familyHistory}</span>
                </li>

                <li>
                  Current Medication:{" "}
                  <span class="patient-info">
                    {patient?.currentMedications[0].medication}
                  </span>
                </li>
              </ul>
            </span>
          </div>
          <Button
            className="buttonP " style={{backgroundColor: " #00A693"}} variant="contained"
            onClick={() => navigate(`/edit/${patient._id}`)}
          >
            Update
          </Button>
        </div>
      </div>
      </div>
    </>
  );
}
