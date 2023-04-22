import { json, useParams, useNavigate } from "react-router-dom";
import Navbar from "../view/nav";
import { useState, useEffect } from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
export default function Edit() {
  const { id } = useParams();
  const { entities } = useJaneHopkins();
  const [patient, setPatient] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchPatient = async () => {
    setIsLoading(true);
    try{
      const patientData = await entities.patient.get(id);
      setPatient(patientData);
    } catch (error) {
      console.error("Failed to fetch patients", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching data
    }
    
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
      {isLoading ? (
        <LinearProgress />
      ) : (
      <div className="containerPe">
      <div className="containerP1">
        <form onSubmit={handleUpdate}>
          <div className="containerP">
            <div className="box" id="top-left">
              <span className="list">
                <ul>
                  {/* <li style={{marginTop: "1rem"}}>Patient Picture</li> */}
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Name"
                      size="small"
                      className=" height form-control"
                      value={patient?.name || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, name: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Date of Birth"
                      size="small"
                      className=" height form-control"
                      value={patient?.dob || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, dob: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="top-right-1">
              <span className="list">
                <ul>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Blood Type"
                      size="small"
                      className=" height form-control"
                      value={patient?.bloodType || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, bloodType: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="top-right-2">
              <span className="list">
                <ul>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Temperature"
                      size="small"
                      className=" form-control"
                      value={patient?.temperature || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, temperature: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="top-right-3">
              <span className="list">
                <ul>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Blood Pressure"
                      size="small"
                      className=" form-control"
                      value={patient?.bloodPressure || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          bloodPressure: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                </ul>
              </span>
            </div>
            <div className="box" id="bottom-left">
              <span className="list">
                <ul>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Height"
                      size="small"
                      className=" form-control"
                      value={patient?.height || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, height: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Weight"
                      size="small"
                      className=" height form-control"
                      value={patient?.weight || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, weight: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="UUID"
                      size="small"
                      className=" height form-control"
                      value={patient?.uuid || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, uuid: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Insurance Number"
                      size="small"
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
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    {patient.icdHealthCodes?.slice(0, 1).map((icd, idx) => (
                      <div key={idx}>
                        <TextField
                          label="ICD Health Code"
                          size="small"
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
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Oxygen Saturation"
                      size="small"
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
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Currently Insured?"
                      size="small"
                      className=" form-control"
                      value={patient?.currentlyInsured || ""}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          currentlyInsured: e.target.value,
                        })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Currently Employed?"
                      size="small"
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
                    />
                  </li>
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Address"
                      size="small"
                      className=" height form-control"
                      value={patient?.address || ""}
                      onChange={(e) =>
                        setPatient({ ...patient, address: e.target.value })
                      }
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </li>

                  <li style={{ marginTop: "1rem" }}>
                    {patient.allergies?.slice(0, 1).map((icd, idx) => (
                      <div key={idx}>
                        <TextField
                          label="Allergies"
                          size="small"
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
                  <li style={{ marginTop: "1rem" }}>
                    <TextField
                      label="Family History"
                      size="small"
                      multiline
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
                    />
                  </li>

                  <li style={{ marginTop: "1rem" }}>
                    {patient.currentMedications?.slice(0, 1).map((icd, idx) => (
                      <div key={idx}>
                        <TextField
                          label="Current Medication"
                          size="small"
                          multiline
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
            <button className=" buttonE btn btn-primary" type="submit">
            Save
          </button>
          </div>
          
        </form>
      </div>
      </div>
      )}
    </>
  );
}
