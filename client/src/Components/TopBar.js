import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ height:'90px'}}>
        {/* <Toolbar sx ={{ justifyContent: 'space-between',}}> */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginTop:'30px' ,textAlign: 'center',}}>
            NAKAMA
          </Typography>
        {/* </Toolbar> */}
      </AppBar>
    </Box>
  );
}