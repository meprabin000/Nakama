import { AccordionSummary } from "@mui/material";
import { Accordion } from "react-bootstrap";

const AllItinerary = (props) => {
    const allItineraries = [{"Name": "New Itinerary"}];
    return ( 
        <div className="allItineraryPage">
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