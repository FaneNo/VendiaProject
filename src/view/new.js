import Navbar from "../view/nav";
import useJaneHopkins from "../hooks/useJaneHopkins";
import React, { useState } from "react";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

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
  const [isLoading, setIsLoading] = useState(false);

  const addPatient = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPatient();
  };

  return (
    <>
      <Navbar />
      <div className="newBoxOut">
        <div className="newBox" >
          <h2>New Patient</h2>

          <form onSubmit={handleSubmit}>
            <div className="container-fluid text-center">
              <div className="row">
                <div
                  className=" col-md-12 "
                  style={{
                    marginRight: 20,
                    borderStyle: "solid",
                    borderColor: "#61838d",
                    borderWidth: "3px",
                    borderRadius: "20px",
                    padding: 20,
                  }}
                >
                  <h4>Appointment</h4>
                  <div style={{ marginTop: "2rem" }}>
                    {patients.visits.map((visit, idx) => (
                      <div key={idx}>
                        <TextField
                          label="Patient"
                          size="small"
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
                  <div style={{ marginTop: "2rem" }}>
                    {patients.visits.map((visit, idx) => (
                      <div key={idx}>
                        <TextField
                          label="Date of Appointment"
                          className="form-control"
                          size="small"
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
                  <div style={{ marginTop: "2rem" }}>
                    {patients.visits.map((visit, idx) => (
                      <div key={idx}>
                        <TextField
                          label="Notes"
                          multiline
                          sx={{ width: "100%" }}
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
                  <div style={{ marginTop: "2rem" }}>
                    {patients.visits.map((visit, idx) => (
                      <div key={idx}>
                        <TextField
                          label="HivViralLoad"
                          className="form-control"
                          sx={{ width: "100%" }}
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
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Name"
                      className="form-control"
                      size="small"
                      value={patients.name}
                      onChange={(e) =>
                        setPatients({ ...patients, name: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Date of Birth"
                      className="form-control"
                      size="small"
                      value={patients.dob}
                      onChange={(e) =>
                        setPatients({ ...patients, dob: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Height"
                      size="small"
                      className="form-control"
                      value={patients.height}
                      onChange={(e) =>
                        setPatients({ ...patients, height: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Weight"
                      size="small"
                      className="form-control"
                      value={patients.weight}
                      onChange={(e) =>
                        setPatients({ ...patients, weight: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    {patients.allergies.map((allergy, idx) => (
                      <div key={idx}>
                        <TextField
                          label="Allergies"
                          size="small"
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
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Temperature"
                      size="small"
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

                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="UUID"
                      className="form-control"
                      size="small"
                      value={patients.uuid}
                      onChange={(e) =>
                        setPatients({ ...patients, uuid: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Insurance Number"
                      size="small"
                      className="form-control"
                      value={patients.insuranceNumber}
                      onChange={(e) =>
                        setPatients({
                          ...patients,
                          insuranceNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Address"
                      size="small"
                      className="form-control"
                      value={patients.address}
                      onChange={(e) =>
                        setPatients({ ...patients, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Blood Type"
                      size="small"
                      className="form-control"
                      value={patients.bloodType}
                      onChange={(e) =>
                        setPatients({ ...patients, bloodType: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div style={{ marginTop: "2rem" }}>
                    {patients.icdHealthCodes.map((icd, idx) => (
                      <div key={idx}>
                        <TextField
                          label="ICD health codes"
                          size="small"
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
                  <div className="form-group" style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Blood Pressure"
                      size="small"
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
                  <div className="form-group" style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Oxygen Saturation"
                      className="form-control"
                      size="small"
                      value={patients.oxygenSaturation}
                      onChange={(e) =>
                        setPatients({
                          ...patients,
                          oxygenSaturation: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Currently Employed?"
                      className="form-control"
                      size="small"
                      value={patients.currentlyEmployed}
                      onChange={(e) =>
                        setPatients({
                          ...patients,
                          currentlyEmployed: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: "2rem" }}>
                    <TextField
                      label="Currently insured?"
                      size="small"
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
                          value={medications.medication}
                          multiline
                          className="form-control"
                          onChange={(e) => {
                            const newMedication =
                              patients.currentMedications.map((a, i) => {
                                if (i === idx) {
                                  return { medication: e.target.value };
                                } else {
                                  return a;
                                }
                              });
                            setPatients((prevPatients) => ({
                              ...prevPatients,
                              currentMedications: newMedication,
                            }));
                          }}
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
                      className="form-control"
                      multiline
                      value={patients.familyHistory}
                      sx={{ width: "100%" }}
                      onChange={(e) =>
                        setPatients({
                          ...patients,
                          familyHistory: e.target.value,
                        })
                      }
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="buttonN">
              <Button
                variant="contained"
                sx={{ fontSize: "14px" }}
                type="submit"
              >
                add patient
              </Button>
            </div>
          </form>
          {isLoading && (
            <Box sx={{ width: "100%", marginTop: "50px" }}>
              <LinearProgress />
            </Box>
          )}
        </div>
      </div>
    </>
  );
}
