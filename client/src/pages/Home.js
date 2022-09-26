import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

//custom imports
import HomepageButtons from "../Components/HomepageButtons";
import TopBar from "../Components/TopBar";


const Home = (props) => {
    
    return ( 
    <div>
    {/* Main Page Top Grid */}
    <Grid container spacing = {2}>
        {/* Creating the Top Bar  */}
        <Grid item xs={12}>
        <TopBar></TopBar>
        </Grid>

        {/* Creating the Main Body  */}
        <Grid item xs = {12}>
        <img src="/images/10966.jpg" alt="10966" width="100%" height="100%"/>
        </Grid>

        <HomepageButtons></HomepageButtons>
    </Grid>
    {/* Closing Main Page Top Grid */}
    </div> );
}
 
export default Home;