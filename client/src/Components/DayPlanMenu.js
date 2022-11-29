import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Navigate, useNavigate} from 'react-router-dom';
import { FormLabel, Modal } from 'react-bootstrap';
import TextField from '@mui/material/TextField';


export default function DayPlanMenu(props) {

  const uri = 'http://localhost:3001/itinerary/';
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

    //----------------------------------------------- EDIT
    const [openForm, setOpen] = React.useState(false);
    const [dayDate, setDayDate] = React.useState(props.DayDate);
    const [Description, setDescription] = React.useState(props.Description);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleCloseForm = () => {
      setOpen(false);
    };
  
    const handleEnter = () => {
      const options = {
        method: 'POST'
          };
      fetch( uri+'updateDayPlan?Itinerary_identifier='+props._id+'&DayPlan_identifier='+props.DayPlan_identifier+'&Description='+Description+'&DayDate='+dayDate, options )
          .then( response => response.json() )
          .then( response => {
              console.log(response)
          } );
      setOpen(false);
    }
  
    //----------------------------------------------- EDIT

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    const options = {
      method: 'POST'
        };
    fetch( uri+'deleteDayPlan?Itinerary_identifier='+props._id+'&DayPlan_identifier='+props.DayPlan_identifier, options )
        .then( response => response.json() )
        .then( response => {
            console.log(response)
        } );
  };

  const handleEdit = () => {
    setAnchorEl(null);
    handleClickOpen();
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
      </Menu>
      <Modal show={openForm} onHide={handleCloseForm}>
        <Modal.Header>
          Edit Itinerary
        </Modal.Header>
        <Modal.Body>
          <TextField
            autoFocus
            margin="dense"
            id="DayDate"
            label="Day Date"
            type="date"
            fullWidth
            variant="standard"
            value={dayDate}
            onChange={(e) => setDayDate(e.target.value)}
          />
          <TextField
            margin="dense"
            id="Description"
            label="Description"
            type="name"
            fullWidth
            variant="standard"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
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


