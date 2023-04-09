import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "./nav";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { Link, useParams, useNavigate } from "react-router-dom";

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
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Batch Number"
          variant="standard"
          value={drug.batchNumber}
          onChange={(event) =>
            setDrug({ ...drug, batchNumber: event.target.value })
          }
        />
        <TextField
          id="standard-basic"
          label="ID"
          variant="standard"
          value={drug.id}
          onChange={(event) =>
            setDrug({ ...drug, id: event.target.value })
          }
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={drug.placebo} onChange={handlePlaceboChange} />
            }
            label="Placebo"
          />
        </FormGroup>
        <button type="submit">Submit</button>
      </Box>
    </>
  );
}
