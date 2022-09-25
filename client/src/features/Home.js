import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


const Home = (props) => {
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

        </Grid>
    </Grid>
    {/* Closing Main Page Top Grid */}
    </div> );
}
 
export default Home;