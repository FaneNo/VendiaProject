import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "./nav";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function BasicTextFields() {
  const { entities } = useJaneHopkins();
  const [patients, setPatients] = useState([]);
  const { id } = useParams();
  const [drug, setDrug] = useState({
    placebo: false,
    batchNumber: "",
    id: "",
    status: "",
  });
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  const navigate = useNavigate();
  const addDrug = async (batchNumber, placebo, id, status) => {
    const drug = await entities.drug.add({
      batchNumber: batchNumber,
      placebo: placebo,
      id: id,
      status: status,
      date: date
      // add other fields here if necessary
    });
    console.log(drug); // for testing purposes only
    navigate('/bavaria')
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { batchNumber, placebo, id, status } = drug;
    addDrug(batchNumber, placebo, id, status);
  };
  const handlePlaceboChange = (event) => {
    setDrug({ ...drug, placebo: event.target.checked });
  };
  return (
    <>
      
      <Navbar />
      <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#4A646C",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          padding: "1rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Typography> Create Drug</Typography>
        <TextField
          id="batchNumber"
          label="Batch Number"
          variant="outlined"
          value={drug.batchNumber}
          onChange={(event) =>
            setDrug({ ...drug, batchNumber: event.target.value })
          }
        />
        <TextField
          id="id"
          label="ID"
          variant="outlined"
          value={drug.id}
          onChange={(event) => setDrug({ ...drug, id: event.target.value })}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={drug.placebo}
                onChange={handlePlaceboChange}
              />
            }
            label="Placebo"
          />
        </FormGroup>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
    </>
  );
}
