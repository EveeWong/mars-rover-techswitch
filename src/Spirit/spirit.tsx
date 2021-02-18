import React from 'react';
import { useState, useEffect } from "react";
import './spirit.scss';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';

function Spirit() {
    const [spiritPhotoData, setSpiritPhotoData] = useState(null);
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => setSpiritPhotoData(data))
    }, []);

    if (!spiritPhotoData) {
        return (
            <div>
                <MobileNavbar />
                Waiting for data!
            </div>
        )
    }
    return (
        <div>
            <MobileNavbar />
            <div>Rover : {spiritPhotoData.photos[0].rover.name} </div>
            <div>Camera : {spiritPhotoData.photos[0].camera.full_name} </div>
            <div>
                <img className="img-spirit-main" src={spiritPhotoData.photos[0].img_src} />
            </div>
            <div>Earth date : {spiritPhotoData.photos[0].earth_date} </div>
            <div>Sol : {spiritPhotoData.photos[0].sol} </div>

        </div>
    );
}

export { Spirit }