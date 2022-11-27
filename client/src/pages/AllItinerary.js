import { AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import useFetch from "../customHooks/useFetch";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const AllItinerary = (props) => {

    const [allItineraries, setAllItineraries] = useState([]);

    const uri = 'http://localhost:3001/Itinerary/getItineraries';
    const {isPending, data, error} = useFetch(uri); 

    useEffect(() => {
        if (data){
            setAllItineraries(data);
        }
    }, [data])
    

    let itineraryList = allItineraries.map((itinerary) => {
        let hrefURI = '/Itinerary/EditItinerary?Itinerary_identifier='+itinerary._id;
        return <ListItemButton component="a" href={hrefURI}>
                    <ListItemText primary={itinerary.Name} />
                </ListItemButton>
      
    })

    return ( 
        <div className="allItineraryPage">
            {itineraryList}
        </div>
     );
}
 
export default AllItinerary;