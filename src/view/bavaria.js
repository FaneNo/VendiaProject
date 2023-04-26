import Navbar from "./nav";
import useBavaria from "../hooks/useBavaria";
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
import { GridArrowDownwardIcon, GridArrowUpwardIcon } from "@mui/x-data-grid";
import { Card, TableFooter, Grid } from "@mui/material";
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
import LinearProgress from "@mui/material/LinearProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Bavaria() {
  const { entities } = useBavaria();
  const [isLoading, setIsLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  const { id } = useParams();
  const [drug, setDrug] = useState([]);

  const listDrug = async () => {
    let drugList = await entities.drug.list();
    console.log(drugList.items);
    setDrug(drugList.items);
  };

  const handleStatusChange = async (drugId) => {
    try {
      // Get the drug item with the given ID
      const { _owner, ...product } = await entities.drug.get(drugId);

      // If the drug item is found, update its status to "pending"
      if (product) {
        const updatedDrug = { ...product, status: "pending" };

        // Update the drug item with the new status
        await entities.drug.update(updatedDrug);

        // Reload the drug list
        console.log(product);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteDrug = async (drugId) => {
    try {
      // Remove the drug item with the given ID
      await entities.drug.remove(drugId);

      // Reload the drug list
      await listDrug();
    } catch (error) {
      console.error(error);
    }
  };

  const listPatients = async () => {
    setIsLoading(true);
    try {
      let patientList = await entities.patient.list();

      setPatients(patientList.items);
    } catch (error) {
      console.error("Failed to fetch patients", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching data
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                  Drug
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Drug</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {row.drugs &&
                      row.drugs.map((drug) => {
                        const matchingDrug = drugss.find((d) => d.id === drug); // Find the drug object that matches the current drug
                        return (
                          <TableRow key={row.id}>
                            <TableCell>ID: {drug}</TableCell>
                            <TableCell>
                              {matchingDrug ? matchingDrug.status : ""}{" "}
                              {/* Display the status property of the matching drug object */}
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
    }).isRequired,
  };

  useEffect(() => {
    listPatients();
    listDrug();
  }, []);

  return (
    <>
      <Navbar />

      {isLoading ? (
        <div className="linearDisplayB">
          <LinearProgress color="secondary" />
        </div>
      ) : (
        <div
        className="bavaria2View"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
            
          //   backgroundColor: "#4A646C",
          // }}
        >
          <div
            className="container-fluid"
            style={{
              display: "flex",
              width: "100%",
              marginTop: "20px",
              marginBottom: "20px",
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
                    rows.map((row) => (
                      <Row
                        key={`${row.name}-${row.id}`}
                        row={row}
                        drugss={drug}
                      />
                    ))}
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
                  margin="auto"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/createDrug`)}
                    color="primary"
                    sx={{ height: 40 }}
                  >
                    Create drug
                  </Button>
                </Box>

                <Box
                  margin="auto"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button variant="contained" onClick={handleClickOpen}>
                    Send Drug
                  </Button>
                  <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                  >
                    <AppBar sx={{ position: "relative" }}>
                      <Toolbar>
                        <Typography
                          sx={{ flex: 1 }}
                          variant="h6"
                          component="div"
                        >
                          Drug List
                        </Typography>

                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={handleClose}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                      </Toolbar>
                    </AppBar>
                    <List>
                      {drug.map((drug) => (
                        <React.Fragment key={`${drug.id}-${drug.batchNumber}`}>
                          <ListItem>
                            <Grid container spacing={2}>
                              <Grid item xs={4}>
                                <ListItemText>
                                  batchNumber: {drug.batchNumber}
                                </ListItemText>
                              </Grid>
                              <Grid item xs={4}>
                                <ListItemText>
                                  Status: {drug.status}
                                </ListItemText>
                              </Grid>
                              <Grid item xs={4}>
                                <ListItemText>
                                  Placebo: {drug.placebo.toString()}
                                </ListItemText>
                              </Grid>

                              {drug.status === "Approved" ||
                              drug.status === "Complete" ? (
                                <>
                                  <Grid item xs={6}>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                    ></Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => handleDeleteDrug(drug._id)}
                                    >
                                      Removed
                                    </Button>
                                  </Grid>
                                </>
                              ) : (
                                <>
                                  <Grid item xs={6}>
                                    <Button
                                      variant="contained"
                                      sx={{ marginLeft: "50%" }}
                                      color="success"
                                      onClick={() =>
                                        handleStatusChange(drug._id)
                                      }
                                    >
                                      Select
                                    </Button>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => handleDeleteDrug(drug._id)}
                                    >
                                      Removed
                                    </Button>
                                  </Grid>
                                </>
                              )}
                            </Grid>
                          </ListItem>

                          <Divider />
                        </React.Fragment>
                      ))}
                    </List>
                  </Dialog>
                </Box>
              </Box>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
}
