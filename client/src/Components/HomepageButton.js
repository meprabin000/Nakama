import React from "react";

const HomepageButton = (props) => {

    return (
            <div className="featureTab">
                <img src={"../../images/"+props.logo} style={{width: '35px', display: 'inline-block', marginRight: '5px'}} />
                <p style={{display: 'inline-block', fontSize: '20px'}}>{props.children}</p>
                <a href={props.link}>
                    <span className="link" style={{display: 'inline-block'}}></span>
                </a>
            </div>      
    )
};

export default HomepageButton;