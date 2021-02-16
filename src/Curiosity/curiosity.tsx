  

import React from 'react';
import {useState, useEffect} from "react";
import './curiosity.scss';

function Curiosity() {  
    const [curiosityPhotoData, setCuriosityPhotoData] = useState(null);
    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-2-15&camera=navcam&api_key=HX6J0TTAmtm3sivr4NNfbdf1o3GebnOtLXyvGJWB")
        .then(response => response.json())
        .then(data => setCuriosityPhotoData(data))
    },[]);
    
    if (!curiosityPhotoData) {
        return <div>Waiting for data!</div>
        }
    return (                
        <div>   
            <div>Rover : {curiosityPhotoData.photos[0].rover.name} </div>
            <div>Camera : {curiosityPhotoData.photos[0].camera.full_name} </div>
            <div>  
                 {/* {myPhotos.photos.map(photo => <img src={photo.img_src}/>)} */}
                  <img className="img-curiosity-main" src={curiosityPhotoData.photos[0].img_src}/>
            </div>
            <div>Earth date : {curiosityPhotoData.photos[0].earth_date} </div>
            <div>Sol : {curiosityPhotoData.photos[0].sol} </div>

        </div>
  );
}

export { Curiosity }