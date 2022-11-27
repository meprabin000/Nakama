import React from "react";
import Home from "./pages/Home";
import CurrencyConverter from "./pages/CurrencyConverter";
import Itinerary from "./pages/Itinerary";
import Translator from "./pages/Translator";
import Emergency from "./pages/Emergency";
import AllItinerary from "./pages/AllItinerary";

const routesMap = () => {
    return ([ 
            {
                "path": "/",
                "element": <Home />
            },
            {
                "path": "/currencyConverter",
                "element": <CurrencyConverter />
            },
            {
                "path": "/Itinerary",
                "element": <Itinerary />
            },
            {
                "path": "/translator",
                "element": <Translator />
            },
            {
                "path": "/Emergency",
                "element": <Emergency />
            },
            {
                "path": "/Itinerary/AllItinerary",
                "element": <AllItinerary />
            }
        ]
    );
};

export default routesMap;

