import Navbar from "./nav";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export default function Doctor() {
  const { entities } = useJaneHopkins();
  const [format, setFormat] = useState("list");
  const [patients, setPatients] = useState([]);
  const { id } = useParams();

  const listPatients = async () => {
    let patientList = await entities.patient.list();
    console.log(patientList.items);
    setPatients(patientList.items);
  };

  const handleDelete = async (id) => {
    const response = await entities.patient.remove(id);

    listPatients();
  };

  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "dob", headerName: "Date of Birth", width: 130 },
    { field: "height", headerName: "Height", width: 90 },
    { field: "weight", headerName: "Weight", width: 90 },
    { field: "uuid", headerName: "UUID", width: 90 },
    { field: "bloodPressure", headerName: "Blood Pressure", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => (
        <>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete patient
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/patient/${params.row.id}`)}
          >
            View Patient
          </button>
        </>
      ),
    },
  ];

  const rows = patients.map((patient) => {
    return {
      id: patient._id,
      name: patient.name,
      dob: patient.dob,
      bloodType: patient.bloodType,
      height: patient.height,
      weight: patient.weight,
      uuid: patient.uuid,
      bloodPressure: patient.bloodPressure,
    };
  });

  useEffect(() => {
    listPatients();
  }, []);

  return (
    <>
      <Navbar />

     
      <div
        className="container-fluid"
        style={{
          height: 1000,
          width: "100%",
          marginTop: "100px",
          background: "#FAFAFA",
          borderRadius: 10,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
        />
      </div>
    </>
  );
}
