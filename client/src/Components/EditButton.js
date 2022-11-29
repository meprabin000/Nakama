import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {checkPasscode} from '../Services/encryptionService';
import {Navigate, useNavigate} from 'react-router-dom';



export default function EditButton() {
  const [open, setOpen] = React.useState(false);
  const [enteredPasscode, setEnteredPasscode] = React.useState("")
  const navigate = useNavigate()

  const handleClickOpen = () => {
    if (window.navigator.onLine)
        setOpen(true);
    else  
      console.log("need connection to edit")
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEnter = () => {
    if(checkPasscode(enteredPasscode)) {
      navigate("/Itinerary/AllItinerary");
    }
  }

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} style={{textDecoration: 'underline', color: 'white', fontFamily: 'baskerville'}}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Enter access passcode to edit itinerary
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Passcode"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => setEnteredPasscode(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEnter}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
