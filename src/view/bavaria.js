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

export default function Bavaria() {
  const { entities } = useBavaria();

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
    let patientList = await entities.patient.list();

    setPatients(patientList.items);
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
    console.log(drug);
  }, [] );

  return (
    <>
      <Navbar />
      <button
        className="btn btn-primary"
        onClick={() => navigate(`/createDrug`)}
      >
        Create drug
      </button>

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
              margin="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="contained" color="primary" sx={{ height: 40 }}>
                Get result
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
                    <Typography sx={{ flex: 1 }} variant="h6" component="div">
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
                        <ListItemText >
                          batchNumber: {drug.batchNumber}
                        </ListItemText>
                        <ListItemText>Status: {drug.status}</ListItemText>
                        <ListItemText>
                          Placebo: {drug.placebo.toString()}
                        </ListItemText>
                        {drug.status === "Approved" ? (
                          <Typography variant="body2" color="textSecondary">
                            
                          </Typography>
                        ) : (
                          <Button
                            variant="contained"
                            onClick={() => handleStatusChange(drug._id)}
                          >
                            Select
                          </Button>
                        )}
                        <Button
                          variant="outlined"
                          onClick={() => handleDeleteDrug(drug._id)}
                        >
                          Removed
                        </Button>
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
    </>
  );
}
