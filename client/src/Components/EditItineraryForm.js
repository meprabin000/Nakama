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



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Itinerary
      </Button>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header>
          Edit Itinerary
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
            defaultValue="Summer 2023"
            onClick={(e) => setEnterName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="startDate"
            label="Start Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue="2022-11-17"
            onClick={(e) => setStartDate(e.target.value)}
          />

          <TextField
            margin="dense"
            id="endDate"
            type="date"
            label="End Date"
            fullWidth
            variant="standard"
            defaultValue="2022-11-17"
            onClick={(e) => setEndDate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Enter</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}