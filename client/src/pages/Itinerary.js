import React from "react";
import { Container } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// added a new dependency in the package.json file to use material icons
function Itinerary(props) {
    return (
        <Container className="Itinerary">
            <h1>Itinerary</h1>
            {/* The accordion here is to create a list of days for the itinerary in the form of collapsible tabls for each day. */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Day 1
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Day 2
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Day 3
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            {/* Repeat this for each day on the itinerary. */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Day 4
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Day 5
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Day 6
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </Container>);
}
 
export default Itinerary;