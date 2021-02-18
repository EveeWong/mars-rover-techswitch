import React from 'react';
import { useState, useEffect } from "react";
import '../RoverPhoto/RoverPhoto.scss'
import { RoverPhoto } from '../RoverPhoto/RoverPhoto';
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";

function Curiosity() {
    const [curiosityPhotoData, setCuriosityPhotoData] = useState(null);
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&camera=navcam&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setCuriosityPhotoData(data)
            }
            )
    }, []);

    if (!curiosityPhotoData) {
        return (
            <div>
                <MobileNavbar />
                Waiting for data!
            </div>
        )
    }
    let curiosityPhoto = curiosityPhotoData.photos.slice(0, 6);
    return (
        <div>
            <RoverPhoto photoData={curiosityPhoto} />
            <MobileNavbar />
         </div>
    )
}

export { Curiosity }

