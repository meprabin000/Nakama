import { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
import ItineraryMenu from "../Components/ItineraryMenu";
import InsertItineraryForm from '../Components/InsertItineraryForm'


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
        return  <div style={{borderBottom: '1px solid black', marginTop: '10px', marginRight: '30px', marginLeft: '30px', padding: '10px', position: 'relative', fontFamily: 'baskerville'}}>
                    <h3 style={{}}>{itinerary.Name}</h3>
                    <ItineraryMenu Itinerary_identifier={itinerary._id} Name={itinerary.Name} StartDate={itinerary.StartDate} EndDate={itinerary.EndDate}></ItineraryMenu>
                    <h4 style={{fontSize: '20px'}}>{(currentItinerary == itinerary._id) ? "published" : "unpublished"}</h4>
                </div>     
    })

    return ( 
        <div class="flexbox-container" style={{fontFamily: 'center'}}>
            <h3 style={{textAlign: 'center', fontSize: '30px', margin: '5px'}}>All Itineraries</h3>
            <div>{itineraryList}</div>
            <InsertItineraryForm></InsertItineraryForm>
        </div>
     );
}
 
export default AllItinerary;