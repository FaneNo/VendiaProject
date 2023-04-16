import Navbar from "../view/nav";
import useJaneHopkins from "../hooks/useJaneHopkins";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
export default function New() {
  const [patients, setPatients] = useState({
    name: "",
    dob: "",
    insuranceNumber: "",
    height: "",
    weight: "",
    bloodPressure: "",
    temperature: "",
    oxygenSaturation: "",
    uuid: "",
    address: "",
    currentMedications: [{ medication: "" }],
    familyHistory: "",
    currentlyEmployed: "",
    currentlyInsured: "",
    icdHealthCodes: [{ code: "" }],
    allergies: [{ allergy: "" }],
    visits: [{ patient: "", dateTime: "", notes: "", hivViralLoad: "" }],
    bloodType: "",
  });

  const { entities } = useJaneHopkins();

  const addPatient = async () => {
    try {
      const response = await entities.patient.add(patients, {
        aclInput: {
          acl: [
            {
              principal: {
                nodes: ["Bavaria", "FDA"],
              },
              operations: ["READ"],
              path: "name",
            },
            {
              principal: {
                nodes: ["Bavaria", "FDA"],
              },
              operations: ["READ"],
              path: "dob",
            },
            {
              principal: {
                nodes: ["Bavaria", "FDA"],
              },
              operations: ["READ"],
              path: "weight",
            },
            {
              principal: {
                nodes: ["Bavaria", "FDA"],
              },
              operations: ["READ"],
              path: "height",
            },
            {
              principal: {
                nodes: ["Bavaria", "FDA"],
              },
              operations: ["READ"],
              path: "drugs",
            },
          ],
        },
      });
      console.log(response);
      setPatients({
        name: "",
        dob: "",
        insuranceNumber: "",
        height: "",
        weight: "",
        bloodPressure: "",
        temperature: "",
        oxygenSaturation: "",
        uuid: "",
        address: "",
        currentMedications: [{ medication: "" }],
        familyHistory: "",
        currentlyEmployed: "",
        currentlyInsured: "",
        icdHealthCodes: [{ code: "" }],
        allergies: [{ allergy: "" }],
        visits: [{ patient: "", dateTime: "", notes: "", hivViralLoad: "" }],
        bloodType: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPatient();
  };

  return (
    <>
      <Navbar />

      <div className="newBox">
        <h2>New Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="container-fluid text-center">
            <div className="row">
              <div className=" col-md-12 " style={{ marginRight: 20, backgroundColor: "lightgrey", borderRadius:10, padding: 20}}>
                <div>
                  <label className="form-label" htmlFor="visit">
                    Patient
                  </label>
                  {patients.visits.map((visit, idx) => (
                    <div key={idx}>
                      <input
                        type="text"
                        className="form-control"
                        value={visit.patient}
                        onChange={(e) => {
                          const newVisits = patients.visits.map((a, i) => {
                            if (i === idx) {
                              return { ...a, patient: e.target.value };
                            } else {
                              return a;
                            }
                          });
                          setPatients((prevPatients) => ({
                            ...prevPatients,
                            visits: newVisits,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="form-label" htmlFor="visit">
                    Date
                  </label>
                  {patients.visits.map((visit, idx) => (
                    <div key={idx}>
                      <input
                        type="text"
                        className="form-control"
                        value={visit.dateTime}
                        onChange={(e) => {
                          const newVisits = patients.visits.map((a, i) => {
                            if (i === idx) {
                              return { ...a, dateTime: e.target.value };
                            } else {
                              return a;
                            }
                          });
                          setPatients((prevPatients) => ({
                            ...prevPatients,
                            visits: newVisits,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="form-label" htmlFor="visit">
                    Notes
                  </label>
                  {patients.visits.map((visit, idx) => (
                    <div key={idx}>
                      <input
                        type="text"
                        className="form-control"
                        value={visit.notes}
                        onChange={(e) => {
                          const newVisits = patients.visits.map((a, i) => {
                            if (i === idx) {
                              return { ...a, notes: e.target.value };
                            } else {
                              return a;
                            }
                          });
                          setPatients((prevPatients) => ({
                            ...prevPatients,
                            visits: newVisits,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="form-label" htmlFor="visit">
                    HivViralLoad
                  </label>
                  {patients.visits.map((visit, idx) => (
                    <div key={idx}>
                      <input
                        type="text"
                        className="form-control"
                        value={visit.hivViralLoad}
                        onChange={(e) => {
                          const newVisits = patients.visits.map((a, i) => {
                            if (i === idx) {
                              return { ...a, hivViralLoad: e.target.value };
                            } else {
                              return a;
                            }
                          });
                          setPatients((prevPatients) => ({
                            ...prevPatients,
                            visits: newVisits,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label" htmlFor="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={patients.name}
                    onChange={(e) =>
                      setPatients({ ...patients, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="dob">
                    DOB:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dob"
                    value={patients.dob}
                    onChange={(e) =>
                      setPatients({ ...patients, dob: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="height">
                    Height
                  </label>
                  <input
                    type={"text"}
                    id="height"
                    className="form-control"
                    value={patients.height}
                    onChange={(e) =>
                      setPatients({ ...patients, height: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="weight">
                    Weight
                  </label>
                  <input
                    type={"text"}
                    id="weight"
                    className="form-control"
                    value={patients.weight}
                    onChange={(e) =>
                      setPatients({ ...patients, weight: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="allergies">
                    Allergies
                  </label>
                  {patients.allergies.map((allergy, idx) => (
                    <div key={idx}>
                      <input
                        type="text"
                        className="form-control"
                        value={allergy.allergy}
                        onChange={(e) => {
                          const newAllergies = patients.allergies.map(
                            (a, i) => {
                              if (i === idx) {
                                return { allergy: e.target.value };
                              } else {
                                return a;
                              }
                            }
                          );
                          setPatients((prevPatients) => ({
                            ...prevPatients,
                            allergies: newAllergies,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label" htmlFor="temp">
                    Temp
                  </label>
                  <input
                    type={"text"}
                    id="temp"
                    className="form-control"
                    value={patients.temperature}
                    onChange={(e) =>
                      setPatients({
                        ...patients,
                        temperature: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="UUID">
                    UUID:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="UUID"
                    value={patients.uuid}
                    onChange={(e) =>
                      setPatients({ ...patients, uuid: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="insurance">
                    Insurance number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="insurance"
                    value={patients.insuranceNumber}
                    onChange={(e) =>
                      setPatients({
                        ...patients,
                        insuranceNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type={"text"}
                    id="address"
                    className="form-control"
                    value={patients.address}
                    onChange={(e) =>
                      setPatients({ ...patients, address: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="btype">
                    Blood Type
                  </label>
                  <input
                    type={"text"}
                    id="btype"
                    className="form-control"
                    value={patients.bloodType}
                    onChange={(e) =>
                      setPatients({ ...patients, bloodType: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label" htmlFor="icd">
                    ICD health codes
                  </label>
                  {patients.icdHealthCodes.map((icd, idx) => (
                    <div key={idx}>
                      <input
                        type="text"
                        className="form-control"
                        value={icd.code}
                        onChange={(e) => {
                          const newCode = patients.icdHealthCodes.map(
                            (a, i) => {
                              if (i === idx) {
                                return { code: e.target.value };
                              } else {
                                return a;
                              }
                            }
                          );
                          setPatients((prevPatients) => ({
                            ...prevPatients,
                            icdHealthCodes: newCode,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pressure">
                    Blood Pressure
                  </label>
                  <input
                    type={"text"}
                    id="pressure"
                    className="form-control"
                    value={patients.bloodPressure}
                    onChange={(e) =>
                      setPatients({
                        ...patients,
                        bloodPressure: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="oxygen">
                    Oxygen Saturation
                  </label>
                  <input
                    type={"text"}
                    id="oxygen"
                    className="form-control"
                    value={patients.oxygenSaturation}
                    onChange={(e) =>
                      setPatients({
                        ...patients,
                        oxygenSaturation: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="employed">
                    Currently Employed
                  </label>
                  <input
                    type={"text"}
                    id="employed"
                    className="form-control"
                    value={patients.currentlyEmployed}
                    onChange={(e) =>
                      setPatients({
                        ...patients,
                        currentlyEmployed: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="insured">
                    Currently insured
                  </label>
                  <input
                    type={"text"}
                    id="insured"
                    className="form-control"
                    value={patients.currentlyInsured}
                    onChange={(e) =>
                      setPatients({
                        ...patients,
                        currentlyInsured: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className=" col-md-6 " style={{ marginTop: 50 }}>
                <Box sx={{ mb: 2 }}>
                  
                  {patients.currentMedications.map((medications, idx) => (
                    <div key={idx}>
                      <TextField
                        label={`Medication `}
                        defaultValue={medications.medication}
                        onChange={(e) => {
                          const newMedication = patients.currentMedications.map(
                            (a, i) => {
                              if (i === idx) {
                                return { medication: e.target.value };
                              } else {
                                return a;
                              }
                            }
                          );
                          setPatients((prevPatients) => ({
                            ...prevPatients,
                            currentMedications: newMedication,
                          }));
                        }}
                        InputProps={{ className: "form-control" }}
                        sx={{ width: "100%" }}
                      />
                    </div>
                  ))}
                </Box>
              </div>

              <div className=" col-md-6 " style={{ marginTop: 50 }}>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    label="Family History"
                    defaultValue={patients.familyHistory}
                    sx={{ width: "100%" }}
                    onChange={(e) =>
                      setPatients({
                        ...patients,
                        familyHistory: e.target.value,
                      })
                    }
                    InputProps={{ className: "form-control", id: "history" }}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="button">
            <button type="submit">add patient</button>
          </div>
        </form>
      </div>

      
    </>
  );
}
