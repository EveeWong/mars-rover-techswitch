import React from 'react';
import { useState, useEffect } from "react";
import '../RoverPhoto/RoverPhoto.scss'
import { RoverTopPhoto } from '../RoverPhoto/RoverTopPhoto';

function Curiosity() {
    let curiosityPhoto = [];
    const [curiosityPhotoData, setCuriosityPhotoData] = useState(null);
    const [clickedImage, setClickedImage] = useState(null);
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&camera=navcam&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setCuriosityPhotoData(data)
                setClickedImage(data.photos[0])
            }
            )
    }, []);

    if (!curiosityPhotoData || !clickedImage) {
        return <div>Waiting for data!</div>
    }

    for (let i = 0; i < 6 && i < curiosityPhotoData.photos.length; i++) {
        curiosityPhoto.push(curiosityPhotoData.photos[i])
    }

    return (
        <div >
            <div>
                <RoverTopPhoto photoArray={clickedImage} />
            </div>
            <div className="img-rover-restofimages">
                <div>
                    {curiosityPhoto.map(photo => <img className="img-rover-photo-list" src={photo.img_src}
                        onClick={() => setClickedImage(photo)} />)}
                </div>
            </div>
        </div>
    )
}

export { Curiosity }