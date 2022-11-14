import React from 'react';
import "./Back.css";

const Back = () => {
    const backHandle = () =>{
        alert("sdf");
    };
    return (
        <>
            <a 
                href="/"
                class="material-icons" id="back-arrow"
            >
                arrow_back
            </a>
        </>
    )
};

export default Back;