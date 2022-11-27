import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import EditItineraryForm from "../Components/EditItineraryForm";


function EditItinerary(props) {
    return (
        <Container>
           <div class="flexbox-container">
            <div><EditItineraryForm></EditItineraryForm></div>
            </div>           
        </Container>
    )
}
 
export default EditItinerary;