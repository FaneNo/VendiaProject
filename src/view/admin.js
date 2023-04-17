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
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid"; // Add this import


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Admin() {
  const { entities } = useFDA();
  const [format, setFormat] = useState("list");
  const [patients, setPatients] = useState([]);
  const { id } = useParams();

  const [drugss, setDrugss] = useState([]);

  const listDrug = async () => {
    let drugList = await entities.drug.list();
    console.log(drugList.items);
    setDrugss(drugList.items);
  };

  const listPatients = async () => {
    let patientList = await entities.patient.list();
    console.log(patientList);
    setPatients(patientList.items);
  };
  const handleStatusChange = async (drugId) => {
    try {
      // Get the drug item with the given ID
      const { _owner, ...product } = await entities.drug.get(drugId);
  
      // If the drug item is found, update its status to "complete"
      if (product) {
        const updatedDrug = { ...product, status: "Complete" };
  
        // Update the drug item with the new status
        await entities.drug.update(updatedDrug);
  
        // Reload the drug list
        await listDrug();
  
        // Update the local state of drugs to reflect the change
        setDrugss((prevDrugs) =>
          prevDrugs.map((drug) => {
            if (drug.id === drugId) {
              return { ...drug, status: "Complete" };
            } else {
              return drug;
            }
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
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
            drugs: patient.drugs && patient.drugs.map((drug) => drug.drug),
          };
        })
      : [];

  function Row(props) {
    const { row, drugss } = props;
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

          <TableCell align="left">
            <Box
              margin="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            > 
              <Button
                variant="outlined"
                onClick={() => navigate(`/patientDrug/${row.id}`)}
              >
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
                  Drug
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Drug</TableCell>
                      <TableCell>status</TableCell>
                      <TableCell>Complete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.drugs &&
                      row.drugs.map((drug) => {
                        const matchingDrug = drugss.find((d) => d.id === drug); // Find the drug object that matches the current drug
                        console.log(matchingDrug);
                        return (
                          <TableRow key={drug}>
                            
                            <TableCell>ID: {drug}</TableCell>
                            <TableCell>
                              {matchingDrug ? matchingDrug.status : ""}{" "}
                              {/* Display the status property of the matching drug object */}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                onClick={() =>
                                  handleStatusChange(matchingDrug._id)
                                }
                              >
                                Complete
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
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
      drugs: PropTypes.arrayOf(PropTypes.string), // <-- Update the prop type here
    }),
    drugss: PropTypes.arrayOf(PropTypes.object),
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
       <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <div className="scroll-container">
              <TableContainer component={Card} className="table-container">
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date of birth</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Weight </TableCell>
                <TableCell>Select patient</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length > 0 &&
                rows.map((row) => (
                  <Row key={row.name} row={row} drugss={drugss} />
                ))}
            </TableBody>
          </Table>
          </TableContainer>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
