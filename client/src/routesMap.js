import React from "react";
import Home from "./features/Home";
import CurrencyConverter from "./features/CurrencyConverter";

const routesMap = () => {
    return ([ 
            {
                "path": "/",
                "element": <Home />
            },
            {
                "path": "/currencyConverter",
                "element": <CurrencyConverter />
            }
        ]
    );
};

export default routesMap;

