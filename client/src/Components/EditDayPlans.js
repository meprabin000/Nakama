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
  const [dayDate, setDayDate] = React.useState("2022-11-17");
  const [description, setDescription] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Day Plans
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Edit Day Plan
        </DialogTitle>
        <DialogContent>
          
          <TextField
            margin="dense"
            id="DayDate"
            label="Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue="2022-11-17"
            value={dayDate}
            onClick={(e) => setDayDate(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description of the day activity"
            type="text"
            fullWidth
            variant="standard"
            onClick={(e) => setDescription(e.target.value)}
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