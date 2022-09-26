import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";



export default function HomepageButtons() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/currencyConverter`; 
    navigate(path);
    }
    return (
        <div style={{marginLeft:30}}>
        
        <Grid container spacing = {2}>

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
        </div>
    )
}