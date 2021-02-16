  
import React from 'react';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './spirit.scss';

function Spirit() {  
    const [myPhotos, setMyPhotos] = useState(null);
    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2006-10-27&api_key=HX6J0TTAmtm3sivr4NNfbdf1o3GebnOtLXyvGJWB")
        .then(response => response.json())
        .then(data => setMyPhotos(data))
        // .then(data => {console.log(data)})
    },[]);
    
    if (!myPhotos) {
        return <div>Waiting for data!</div>
        }
    return (                
        <div>   
            <div>Rover : {myPhotos.photos[0].rover.name} </div>
            <div>Camera : {myPhotos.photos[0].camera.full_name} </div>
            <div>  
                 {/* {myPhotos.photos.map(photo => <img src={photo.img_src}/>)} */}
                  <img className = "img-spirit-main" src={myPhotos.photos[0].img_src}/>
            </div>
            <div>Earth date : {myPhotos.photos[0].earth_date} </div>
            <div>Sol : {myPhotos.photos[0].sol} </div>

        </div>
  );
}

export { Spirit }