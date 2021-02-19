import React from 'react';
import { useState, useEffect } from "react";
import '../RoverPhoto/RoverPhoto.scss'
import { RoverPhoto } from '../RoverPhoto/RoverPhoto';
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { Header } from '../Header/Header';

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
                <Header 
      imgSource = {`${process.env.PUBLIC_URL}/images/mission_curiosity.png`}
      altTag = 'curiosity'
      />
                Waiting for data!
            </div>
        )
    }
    const curiosityPhoto = curiosityPhotoData.photos.slice(0, 6);
    return (
        <div>
            <RoverPhoto photoData={curiosityPhoto} />
            <MobileNavbar />
            <Header 
      imgSource = {`${process.env.PUBLIC_URL}/images/mission_curiosity.png`}
      altTag = 'curiosity'
      />
         </div>
    )
}

export { Curiosity }

