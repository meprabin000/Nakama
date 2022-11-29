import React from "react";
import { Container } from "react-bootstrap";
import EditButton from "../Components/EditButton";
import HomepageButton from "../Components/HomepageButton";
import TopBar from "../Components/TopBar";


const Home = (props) => {
    return ( 
    <div className="homepage">
        <div className="homeImage">
            <img src="../../images/homepage.jpg" />
            <div className="featureTabs">
                <HomepageButton link="http://localhost:3000/currencyConverter" logo="converter.png">Converter</HomepageButton>
                <HomepageButton link="http://localhost:3000/translator" logo="translator.png">Translator</HomepageButton>
                <HomepageButton link="http://localhost:3000/Itinerary" logo="itinerary.png">Itinerary</HomepageButton>
                <HomepageButton link="http://localhost:3000/Emergency" logo="warning.png">Emergency</HomepageButton>
                <EditButton/>
            </div>
        </div>

        
    </div> );
}
 
export default Home;