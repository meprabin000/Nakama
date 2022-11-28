import { AccordionSummary } from "@mui/material";
import { Accordion } from "react-bootstrap";
import EditItineraryForm from "../Components/EditItineraryForm";

const AllItinerary = (props) => {
    const allItineraries = [{"Name": "New Itinerary"}];
    
    return ( 
        <div className="allItineraryPage">
            <EditItineraryForm />
            {allItineraries.map((itinerary) => {
                return <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>
                        {itinerary.Name}
                        </Accordion.Header>
                    </Accordion.Item>
                </Accordion>
            })}
        </div>
     );
}
 
export default AllItinerary;