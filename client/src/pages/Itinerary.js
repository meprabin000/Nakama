import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";
import { Container } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditButton from "../Components/EditButton";
import ItineraryMenu from "../Components/ItineraryMenu";

//creates cache entry into window browser or updates existing entries
function addCache(name, url, response){
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      caches.open(name).then((cache) => {
        cache.put(url, data);
      });
    }
  };

//obtains the cached data by matching name and url
async function getCache(name, url){
    const storage = await caches.open(name);
    const response = await storage.match(url);

    return response.json();
  };

// added a new dependency in the package.json file to use material icons
function Itinerary(props) {

    const [dayplans, setDayPlans] = useState([]);

    const Itinerary_identifier = '63694b7a8395f71a7bdac10c';
    const uri = 'http://localhost:3001/itinerary/getDayPlans?Itinerary_identifier='+Itinerary_identifier 

    const {isPending, data, error} = useFetch(uri);
    
    if ((error || (data == undefined && error == ""))) {
        getCache('dayplans', 'http://localhost:3001').then((item) => {
            setDayPlans(item);
        });
    }
    else if (!error && (data != undefined || error != "")){
        const setdplans = () => {
            setDayPlans(data);
        };
        addCache('dayplans', 'http://localhost:3001', data);
    }

        let schedule = dayplans.map((day) => 
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {day.DayDate}
            <ItineraryMenu />
            </AccordionSummary>
            <AccordionDetails>
            {day.Description}
            </AccordionDetails>
            </Accordion>
        );

    return (
        <Container className="Itinerary">
           <div class="flexbox-container">
            <div><h1>Itinerary</h1></div>
            <div><EditButton/></div> 
            <div><ul>{schedule}</ul></div>
            </div>           
        </Container>);
}
 
export default Itinerary;