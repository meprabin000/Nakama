import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditItineraryForm() {
  const [open, setOpen] = React.useState(false);
  const [enterName, setEnterName] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

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
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onClick={(e) => setEnterName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="start date"
            label="Start Date"
            type="date"
            fullWidth
            variant="standard"
            onClick={(e) => setStartDate(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="end date"
            label="End Date"
            type="date"
            fullWidth
            variant="standard"
            onClick={(e) => setEndDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}