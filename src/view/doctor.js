import Navbar from "./nav";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function Doctor() {
  const { entities } = useJaneHopkins();
  const [format, setFormat] = useState("list");
  const [patients, setPatients] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const listPatients = async () => {
    setIsLoading(true); // Set loading state to true before fetching data
    try {
      let patientList = await entities.patient.list();
      console.log(patientList.items);
      setPatients(patientList.items);
    } catch (error) {
      console.error("Failed to fetch patients", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching data
    }
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
      headerName: "Actions",
      field: "actions",
      width: 300,

      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            onClick={() => navigate(`/patient/${params.row.id}`)}
          >
            View Patient
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ marginLeft: "10px" }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete Patient
          </Button>
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
        className="doctor2"
        style={{
          backgroundColor: "#317873",
          height: "100vh",
          width: "100vw",
          padding: "15px",
        }}
      >
        <Box
          className="doctor1 container-fluid"
          sx={{
            height: 1000,
          }}
        >
          {isLoading ? (
            <LinearProgress />
          ) : (
            <DataGrid
              style={{ backgroundColor: "white", marginTop: "10px" }}
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              // checkboxSelection
            />
          )}
        </Box>
      </div>
    </>
  );
}
