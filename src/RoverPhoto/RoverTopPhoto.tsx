
import React from 'react';
import { useState, useEffect } from "react";
import './RoverPhoto.scss';

function RoverTopPhoto(props) {
    return (
        <div >
            <div className="rover-allimagesData">
                <img className="img-rover-top" src={props.photoArray.img_src} />
                <div>Camera : {props.photoArray.camera.full_name} </div>
            <div>Earth date : {props.photoArray.earth_date} </div>
            <div>Sol : {props.photoArray.sol} </div>
            </div>
            
        </div> 
    )
}
        
export { RoverTopPhoto }