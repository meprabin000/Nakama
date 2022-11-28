import { AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import useFetch from "../customHooks/useFetch";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';



const AllItinerary = (props) => {

    const [allItineraries, setAllItineraries] = useState([]);
    const [currentItinerary, setCurrentItinerary] = useState();

    const uri = 'http://localhost:3001/Itinerary/getItineraries';
    const {isPending, data, error} = useFetch(uri); 

    useEffect(() => {
        if (data){
            setAllItineraries(data);
        }
    }, [data])

    const url = "http://localhost:3001/itinerary/getCurrentItinerary"
    fetch(url).then((response) => response.json())
    .then((statusData) => {
        setCurrentItinerary(statusData.CurrentItinerary);
    });

    let itineraryList = allItineraries.map((itinerary) => {
        let hrefURI = '/Itinerary/EditItinerary?Itinerary_identifier='+itinerary._id;
        return <ListItemButton component="a" href={hrefURI}>
                    <ListItemText primary={itinerary.Name} />
                    <Button >{(currentItinerary == itinerary._id) ? "published" : "unpublished"}</Button> 
                </ListItemButton> 

      
    })

    return ( 
        <div className="allItineraryPage">
            {itineraryList}
        </div>
     );
}
 
export default AllItinerary;