

import React from 'react';
import { useState, useEffect } from "react";
import './opportunity.scss';

function Opportunity() {
    const [opportunityPhotoData, setOpportunityPhotoData] = useState(null);
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => setOpportunityPhotoData(data))
    }, []);

    if (!opportunityPhotoData) {
        return <div>Waiting for data!</div>
    }
    return (
        <div>
            <div>Rover : {opportunityPhotoData.photos[0].rover.name} </div>
            <div>Camera : {opportunityPhotoData.photos[0].camera.full_name} </div>
            <div>
                <img className="img-opportunity-main" src={opportunityPhotoData.photos[0].img_src} />
            </div>
            <div>Earth date : {opportunityPhotoData.photos[0].earth_date} </div>
            <div>Sol : {opportunityPhotoData.photos[0].sol} </div>
        </div>
    )
}

export { Opportunity }