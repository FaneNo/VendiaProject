import Navbar from "./nav";
import useFDA from "../hooks/useFDA";
import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Admin() {
  const { entities } = useFDA();
  const [format, setFormat] = useState("list");
  const [patients, setPatients] = useState([]);
  const { id } = useParams();
  const [drug, setDrug] = useState([]);

  const listPatients = async () => {
    let patientList = await entities.patient.list();
    
    setPatients(patientList.items);
  };

  const listDrug = async () => {
    let drugList = await entities.drug.list();
    console.log(drugList.items);
    setDrug(drugList.items);
  };

  
  

  const [open, setOpen] = useState(false);

  



  const navigate = useNavigate();

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
    const [approve, setApprove] = useState("Pending");

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
          <TableCell align="left"></TableCell>
          <TableCell align="left">
          <Box
              margin="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="outlined" onClick={() => navigate(`/patientDrug/${row.id}`)}>
                Select
              </Button>
              
            </Box>
          </TableCell>
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
    listDrug();
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
                <TableCell>Name</TableCell>
                <TableCell>Date of birth</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Weight </TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Select patient</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length > 0 &&
                rows.map((row) => <Row key={row.name} row={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
