import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import { Unstable_DateField as DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormLabel, Modal } from 'react-bootstrap';


export default function EditItineraryForm() {
  const [open, setOpen] = React.useState(false);
  const [enterName, setEnterName] = React.useState('');
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const uri = 'http://localhost:3001/itinerary/';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEnter = () => {
    setOpen(false)
    const options = {
      method: 'POST'
        };
    fetch( uri+'insertItinerary?StartDate='+startDate+'&Name='+enterName+'&EndDate='+endDate, options )
          .then( response => response.json() )
          .then( response => {
              console.log(response)
          } );
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Insert Itinerary
      </Button>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header>
          Insert Itinerary
        </Modal.Header>
        <Modal.Body>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Trip Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={(e) => setEnterName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="startDate"
            label="Start Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue="2023-01-01"
            onChange={(e) => setStartDate(e.target.value)}
          />

          <TextField
            margin="dense"
            id="endDate"
            type="date"
            label="End Date"
            fullWidth
            variant="standard"
            defaultValue="2023-01-01"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEnter}>Enter</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}