import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import { Unstable_DateField as DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormLabel, Modal } from 'react-bootstrap';


export default function InsertDayPlansForm(props) {
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState();
  const [dayDate, setDayDate] = React.useState("2023-01-01");
  const {refresh, setRefresh} = props

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
    fetch( uri+'insertDayPlan?Itinerary_identifier='+props._id+'&DayDate='+dayDate+'&Description='+description, options )
          .then( response => response.json() )
          .then( response => {
              console.log(response)
          } )
    // .then(window.location.reload());
  }

  return (
    <div style={{textAlign: 'center', marginTop: '30px'}}>
      <Button variant="outlined" onClick={handleClickOpen} style={{color: '#470000', borderColor: '#470000', fontFamily: 'baskerville'}}>
        Insert Dayplans 
      </Button>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header>
          Insert DayPlans
        </Modal.Header>
        <Modal.Body>
        <TextField
            margin="dense"
            id="dayDate"
            label="Day Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue="2023-01-01"
            onChange={(e) => setDayDate(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="name"
            fullWidth
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
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