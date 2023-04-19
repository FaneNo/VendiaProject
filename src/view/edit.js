import { json, useParams, useNavigate } from "react-router-dom";
import Navbar from "../view/nav";
import { useState, useEffect } from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Edit() {
  const { id } = useParams();
  const { entities } = useJaneHopkins();
  const [patient, setPatient] = useState({});
  const fetchPatient = async () => {
    const patientData = await entities.patient.get(id);
    setPatient(patientData);
  };
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { _owner, ...product } = patient;
    const updateProductResponse = await entities.patient.update(product);

    setPatient(updateProductResponse);
    navigate(`/patient/${patient._id}`);
  };

  useEffect(() => {
    fetchPatient();
  }, [entities.patient, id]);

  return (
    <>
      <Navbar />
      <div className="containerP1">
        <form onSubmit={handleUpdate}>
          <div className="containerP">
            <div className="box" id="top-left">
              <span className="list">
                <ul>
                  <li>Patient Picture</li>
                  <li>
                    Name:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.name || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, name: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    DOB:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.dob || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, dob: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="top-right-1">
              <span className="list">
                <ul>
                  <li>
                    Blood Type:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.bloodType || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, bloodType: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="top-right-2">
              <span className="list">
                <ul>
                  <li>
                    Temperature{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.temperature || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, temperature: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="top-right-3">
              <span className="list">
                <ul>
                  <li>
                    Blood Pressure{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.bloodPressure || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          bloodPressure: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="bottom-left">
              <span className="list">
                <ul>
                  <li>
                    Height:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.height || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, height: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    Weight:
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.weight || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, weight: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    UUID:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.uuid || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, uuid: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    Insurance Number:
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.insuranceNumber || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          insuranceNumber: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    ICD Health code:
                    {patient.icdHealthCodes?.slice(0, 1).map((icd, idx) => (
                      <div key={idx}>
                        <input
                          type="text"
                          className="form-control"
                          value={icd.code}
                          onChange={(e) => {
                            const newCode = e.target.value;
                            setPatient((prevPatient) => ({
                              ...prevPatient,
                              icdHealthCodes: [{ code: newCode }],
                            }));
                          }}
                        />
                      </div>
                    ))}
                  </li>
                  <li>
                    Oxygen Saturation:
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.oxygenSaturation || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          oxygenSaturation: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    Currently Insured:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.currentlyInsured || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          currentlyInsured: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    Currently Employed:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.currentlyEmployed || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          currentlyEmployed: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>
                  <li>
                    Address:{" "}
                    <input
                      type={"text"}
                      className=" height form-control"
                      value={patient?.address || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, address: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></input>
                  </li>

                  <li>
                    Allergies:
                    {patient.allergies?.slice(0, 1).map((icd, idx) => (
                      <div key={idx}>
                        <textarea
                          type="text"
                          className="form-control"
                          value={icd.allergy}
                          onChange={(e) => {
                            const newAllergy = e.target.value;
                            setPatient((prevPatient) => ({
                              ...prevPatient,
                              allergies: [{ allergy: newAllergy }],
                            }));
                          }}
                        />
                      </div>
                    ))}
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="bottom-right">
              <span className="list" id="">
                <ul>
                  <li>
                    Family History:
                    <textarea
                      type={"text"}
                      className=" height form-control"
                      value={patient?.familyHistory || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          familyHistory: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    ></textarea>
                  </li>

                  <li>
                    Current Medication:
                    
                    {patient.currentMedications?.slice(0, 1).map((icd, idx) => (
                      <div key={idx}>
                        <textarea
                          type="text"
                          className="form-control"
                          value={icd.medication}
                          onChange={(e) => {
                            const newMedication = e.target.value;
                            setPatient((prevPatient) => ({
                              ...prevPatient,
                              currentMedications: [
                                { medication: newMedication },
                              ],
                            }));
                          }}
                        />
                      </div>
                    ))}
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <button
            className=" buttonP btn btn-primary"
            type="submit"
          >Save</button>
        </form>
      </div>
    </>
  );
}
