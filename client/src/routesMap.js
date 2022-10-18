import React from "react";
import Home from "./pages/Home";
import CurrencyConverter from "./pages/CurrencyConverter";
import Itinerary from "./pages/Itinerary";

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
            }
        ]
    );
};

export default routesMap;

