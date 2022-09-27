import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import routesMap from "./routesMap";

const Router = (props) => {
    return (<BrowserRouter> 
        <Routes>
            {routesMap().map((route) => {
                return <Route exact path={route.path} element={route.element} key={route.path}/>
            })}
        </Routes>
    </BrowserRouter>)
};

export default Router;