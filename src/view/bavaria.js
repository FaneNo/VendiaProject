import Navbar from "./nav";
import useBavaria from "../hooks/useBavaria";
import { useState, useEffect, Fragment } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { GridArrowDownwardIcon, GridArrowUpwardIcon } from "@mui/x-data-grid";
import { Card, TableFooter } from "@mui/material";
import { flexbox } from "@mui/system";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Bavaria() {
  const { entities } = useBavaria();
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
    { field: "status", headerName: "Status", width: 150 },
  ];

  const rows =
    patients.length > 0
      ? patients.map((patient) => {
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
        })
      : [];

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
      <Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <GridArrowUpwardIcon /> : <GridArrowDownwardIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="left">{row.dob}</TableCell>
          <TableCell align="left">{row.height}</TableCell>
          <TableCell align="left">{row.weight}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Drug</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>
                        <button className="btn btn-primary">Assign drug</button>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history
                      ? row.history.map((historyRow) => (
                          <TableRow key={historyRow.id}></TableRow>
                        ))
                      : null}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  }
  Row.propTypes = {
    row: PropTypes.shape({
      id: PropTypes.string.isRequired,
      dob: PropTypes.string,
      weight: PropTypes.string,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number,
          customerId: PropTypes.string,
          date: PropTypes.string,
        })
      ),
      name: PropTypes.string,
      height: PropTypes.string,
    }).isRequired,
  };

  useEffect(() => {
    listPatients();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{
          display: "flex",
          width: "100%",
          marginTop: "100px",

          background: "#FAFAFA",
          borderRadius: 10,
        }}
      >
        <TableContainer component={Card}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Date of birth</TableCell>
                <TableCell align="left">Height</TableCell>
                <TableCell align="left">Weight </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length > 0 &&
                rows.map((row) => <Row key={row.name} row={row} />)}
            </TableBody>
          </Table>

          <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
            margin= "auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Button variant="contained" color="primary" sx={{ height: 40 }}>
              Get result
            </Button>
            </Box>
            
            <Box
            margin= "auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Button variant="contained" color="primary" sx={{ height: 40 }}>
              Send Drugs
            </Button>
            </Box>
          </Box>
        </TableContainer>
      </div>
    </>
  );
}
