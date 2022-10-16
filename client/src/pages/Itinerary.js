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
                    July 14th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Flight to Tokyo, go to K’s House for accommodation (add one day)
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 16th, 2023
                </AccordionSummary>
                <AccordionDetails>
                welcome dinner
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 17th, 2023   
                </AccordionSummary>
                <AccordionDetails>
                Ueno, Sensoji Temple, Akihabara
                </AccordionDetails>
            </Accordion>
            {/* Repeat this for each day on the itinerary. */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 18th, 2023    
                </AccordionSummary>
                <AccordionDetails>
                Tokyo Station, Imperial Palace, Sengakuji Temple 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 19th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Meiji Shrine, Harajuku, Hachiko Statue, Shibuya Scramble and Shibuya Sky
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 20th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Odaiba: Miraiken, DiverCity Tokyo Plaza (lunch), teamLab Borderless 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 21st, 2023
                </AccordionSummary>
                <AccordionDetails>
                JR Central Tour (Shinjuku Station) 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 22nd, 2023
                </AccordionSummary>
                <AccordionDetails>
                Free Day 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 23rd, 2023
                </AccordionSummary>
                <AccordionDetails>
                Free Day 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 24th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Yokohama Landmark Tower, Cup Noodle Museum, Gundam Factory  
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 25th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Enoshima Station, Kamakura, Great Buddha, Zushi Beach  
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 26th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Hakone  
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 27th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Travel to Kyoto, Kyoto Station, K’s House  
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 28th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Kyoto:  Fushimi Inari Shrine, Nara Park
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 29th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Free Day 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 30th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Free Day 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                July 31st, 2023
                </AccordionSummary>
                <AccordionDetails>
                Kyoto: Kinkakuji Temple, Ryoanji Temple, Arashiyama Bamboo Forest 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 1st, 2023
                </AccordionSummary>
                <AccordionDetails>
                Osaka 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 2nd, 2023
                </AccordionSummary>
                <AccordionDetails>
                Hyogo: Koshien Stadium, Akashi Bridge, Himeji Castle 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 3rd, 2023
                </AccordionSummary>
                <AccordionDetails>
                Hiroshima Atomic Bomb Dome 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 4th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Free Day 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 5th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Free Day 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 6th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Work or Explore Option 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 7th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Work or Explore Option 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 8th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Farewell Dinner 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                August 9th, 2023
                </AccordionSummary>
                <AccordionDetails>
                Return to DFW (lose one day) 
                </AccordionDetails>
            </Accordion>
            <h1></h1>

            
        </Container>);
}
 
export default Itinerary;