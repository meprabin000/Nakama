import React, { useState , useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DayPlanMenu from "../Components/DayPlanMenu";
import InsertDayPlansForm from '../Components/InsertDayPlansForm'



function EditItinerary(props) {

    const [searchParams] = useSearchParams();
    const [dayplans, setDayPlans] = useState([]);

        let Itinerary_identifier = searchParams.get('Itinerary_identifier');
        const uri = 'http://localhost:3001/itinerary/getDayPlans?Itinerary_identifier='+Itinerary_identifier 

        let {isPending, data, error} = useFetch(uri);
        
        useEffect(() => {
            if ((error || (data == undefined && error == ""))) {
                console.log(error);
            }
            else if (!error && (data != undefined || error != "")){
                setDayPlans(data);
            }
        }, [data])

        let schedule = dayplans.map((day) => 
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {day.DayDate}
            <DayPlanMenu _id={Itinerary_identifier} DayPlan_identifier={day._id} DayDate={day.DayDate} Description={day.Description}/>
            </AccordionSummary>
            <AccordionDetails>
            {day.Description}
            </AccordionDetails>
            </Accordion>
        );

    return (
        <Container>
           <div class="flexbox-container">
           <div><h1>Edit Itinerary</h1></div>
            <div><ul>{schedule}</ul></div>
            </div>  
            <InsertDayPlansForm _id={Itinerary_identifier}></InsertDayPlansForm>         
        </Container>
    )
}
 
export default EditItinerary;