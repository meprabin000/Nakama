import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";


const Home = (props) => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/currencyConverter`; 
    navigate(path);
    }
    return ( 
    <div>
    {/* Main Page Top Grid */}
    <Grid container spacing = {2}>
        {/* Creating the Top Bar  */}
        <Grid item xs={12}>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
            </Container>
        </Grid>

        {/* Creating the Main Body  */}
        <Grid item xs = {12}>
        <img src="/images/10966.jpg" alt="10966" width="100%" height="100%"/>
        </Grid>
        {/* Creating the currency converter button  */}
        <Grid item xs = {6} alignItems="center">
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={routeChange} >Currency Converter</Button>
        </Stack>
        </Grid>

        <Grid item xs = {6}>
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" href="#outlined-buttons">
            Translator
        </Button>
        </Stack>
        </Grid>
        <Grid item xs = {6} alignItems="center">
        <Stack direction="row" spacing={2}>
        <Button variant="outlined">Itinerary</Button>
        </Stack>
        </Grid>

        <Grid item xs = {6}>
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" href="#outlined-buttons">
            SOS
        </Button>
        </Stack>
        </Grid>
    </Grid>
    {/* Closing Main Page Top Grid */}
    </div> );
}
 
export default Home;