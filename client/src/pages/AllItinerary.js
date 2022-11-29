import { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
import ItineraryMenu from "../Components/ItineraryMenu";


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
        return  <div style={{border: '1px solid black', marginTop: '10px', marginRight: '30px', marginLeft: '30px', padding: '10px'}}>
                    <h3>{itinerary.Name}</h3>
                    <ItineraryMenu Itinerary_identifier={itinerary._id} Name={itinerary.Name} StartDate={itinerary.StartDate} EndDate={itinerary.EndDate}></ItineraryMenu>
                    <h4>{(currentItinerary == itinerary._id) ? "published" : "unpublished"}</h4>
                </div>     
    })

    return ( 
        <div class="flexbox-container">
        <div>{itineraryList}</div>
        </div>
     );
}
 
export default AllItinerary;