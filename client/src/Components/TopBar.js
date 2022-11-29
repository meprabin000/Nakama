import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fontFamily } from '@mui/system';
import { green } from '@mui/material/colors';
 

export default function TopBar() {
  return (
    <Box sx={
      { 
        flexGrow: 1,
        padding: '5px',
        backgroundColor: '#470000',
        textAlign: 'center',
        height: '13vh'
      }
      }>
        
        <a href="http://localhost:3000" style={{textDecoration: 'none', display: 'inline-block'}}>
        <img src="../../images/logo.png" style={{width: '63px', display: 'inline-block'}}/>
          <h3 style={
          {
            textAlign: 'center', 
            fontFamily: 'cursive',
            fontSize: '50px',
            color: 'white',
            display: 'inline-block',
            position: 'relative',
            top: '10px',
            left: '9px'
          }
          }>Nakama</h3>
        </a>
        
    </Box>
  );
}