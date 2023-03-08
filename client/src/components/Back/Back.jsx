import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Back.css";


const Back = () => {
    const navigate = useNavigate();
    const handleBackAction = () => {
        navigate(-1);
    }
    return (
        <>
            <button
                onClick={handleBackAction}
                className="material-icons" 
                id="back-arrow"
            >
                arrow_back
            </button>
        </>
    )
};

export default Back;