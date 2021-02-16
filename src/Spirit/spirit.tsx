  
import React from 'react';
import {useState, useEffect} from "react";
import './spirit.scss';

function Spirit() {  
    const [spiritPhotoData, setSpiritPhotoData] = useState(null);
    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2006-10-27&api_key=HX6J0TTAmtm3sivr4NNfbdf1o3GebnOtLXyvGJWB")
        .then(response => response.json())
        .then(data => setSpiritPhotoData(data))
    },[]);
    
    if (!spiritPhotoData) {
        return <div>Waiting for data!</div>
        }
    return (                
        <div>   
            <div>Rover : {spiritPhotoData.photos[0].rover.name} </div>
            <div>Camera : {spiritPhotoData.photos[0].camera.full_name} </div>
            <div>  
                 {/* {myPhotos.photos.map(photo => <img src={photo.img_src}/>)} */}
                  <img className="img-spirit-main" src={spiritPhotoData.photos[0].img_src}/>
            </div>
            <div>Earth date : {spiritPhotoData.photos[0].earth_date} </div>
            <div>Sol : {spiritPhotoData.photos[0].sol} </div>

        </div>
  );
}

export { Spirit }