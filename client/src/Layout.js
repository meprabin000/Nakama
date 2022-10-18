import React from "react";
import Router from "./Router";
import TopBar from "./Components/TopBar";

const Layout = (props) => {
    return ( <>
        <TopBar />

        <Router />
    </> );
}
 
export default Layout;