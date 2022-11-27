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
  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2} direction="row">
              <DateField
                label="StartDate"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
              />
              <DateField
                label="Controlled field"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
            </Stack>
          </LocalizationProvider>
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