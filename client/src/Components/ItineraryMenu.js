import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Navigate, useNavigate} from 'react-router-dom';
import EditItineraryForm from './EditItineraryForm';
import { FormLabel, Modal } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

export default function ItineraryMenu(props) {

  const uri = 'http://localhost:3001/itinerary/';
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //----------------------------------------------- EDIT
  const [openForm, setOpen] = React.useState(false);
  const [enterName, setEnterName] = React.useState(props.Name);
  const [startDate, setStartDate] = React.useState(props.StartDate);
  const [endDate, setEndDate] = React.useState(props.EndDate);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  const handleEnter = () => {
    setOpen(false);

  }
  //----------------------------------------------- EDIT

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClickOpen();
    setAnchorEl(null);
  };

  const handlePublish = () => {
    setAnchorEl(null);
    const options = {
        method: 'POST'
          };
    fetch( uri+'updateCurrentItinerary?Itinerary_identifier='+props.Itinerary_identifier, options )
        .then( response => response.json() )
        .then( response => {
            console.log(response)
        } );
  };

  const handleViewDayPlans = () => {
    navigate('/Itinerary/EditItinerary?Itinerary_identifier='+props.Itinerary_identifier)
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="Icon-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <MoreHorizRoundedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'Icon-button',
        }}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handlePublish}>Publish</MenuItem>
        <MenuItem onClick={handleViewDayPlans}> View DayPlans </MenuItem>
      </Menu>
      <Modal show={openForm} onHide={handleCloseForm}>
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
            defaultValue={enterName}
            onClick={(e) => setEnterName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="startDate"
            label="Start Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue={startDate}
            onClick={(e) => setStartDate(e.target.value)}
          />

          <TextField
            margin="dense"
            id="endDate"
            label="End Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue={endDate}
            onClick={(e) => setEndDate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleEnter}>Enter</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


