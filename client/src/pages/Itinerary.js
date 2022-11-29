import React, { useState , useEffect } from "react";
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
    const [currentItinerary, setCurrentItinerary] = useState([]);

    const url = "http://localhost:3001/itinerary/getCurrentItinerary"
    fetch(url).then((response) => response.json())
    .then((data) => {
            setCurrentItinerary(data.CurrentItinerary)
    });
  

    const Itinerary_identifier = currentItinerary;
    const uri = 'http://localhost:3001/itinerary/getDayPlans?Itinerary_identifier='+Itinerary_identifier 

    let {isPending, data, error} = useFetch(uri);
    
    useEffect(() => {
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
    }, [data])

        let schedule = dayplans.map((day) => 
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {day.DayDate}
            </AccordionSummary>
            <AccordionDetails>
            {day.Description}
            </AccordionDetails>
            </Accordion>
        );

    return (
        <Container className="Itinerary">
           <div class="flexbox-container" style={{textAlign: "center", fontFamily: 'baskerville'}}>
            <div style={{textAlign: 'center', fontFamily: 'baskerville', marginTop: '10px'}}><h1>Itinerary</h1></div>
            <div style={{textAlign: 'left'}}>{schedule}</div>
            </div>           
        </Container>);
}
 
export default Itinerary;