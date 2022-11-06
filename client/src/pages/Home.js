import React from "react";
import { Container } from "react-bootstrap";
import HomepageButton from "../Components/HomepageButton";
import TopBar from "../Components/TopBar";


const Home = (props) => {
    return ( 
    <Container className="homepage">
        <div className="homeImage">
            <img src="../../images/homepage.jpg" />
        </div>

        <div className="featureTabs">
            <HomepageButton link="http://localhost:3000/currencyConverter">Converter</HomepageButton>
            <HomepageButton link="http://localhost:3000/translator">Translator</HomepageButton>
            <HomepageButton link="http://localhost:3000/Itinerary">Itinerary</HomepageButton>
            <HomepageButton>Emergency</HomepageButton>
        </div>
    </Container> );
}
 
export default Home;