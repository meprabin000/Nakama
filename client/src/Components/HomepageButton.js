import React from "react";

const HomepageButton = (props) => {

    return (
            <div className="featureTab">
                <p>{props.children}</p>
                <a href={props.link}>
                    <span className="link"></span>
                </a>
            </div>      
    )
};

export default HomepageButton;