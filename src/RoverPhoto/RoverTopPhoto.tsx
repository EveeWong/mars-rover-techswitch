import React from 'react';
import './RoverTopPhoto.scss';

interface RoverPhoto {
    img_src: string;
    full_name: string;
    earth_date: string;
    sol: string
}

function RoverTopPhoto(props: RoverPhoto) {
    return (
        <div >
            <div className="top-rover-div">
                <img className="img-rover-top" src={props.img_src} />
                <div>Camera : {props.full_name} </div>
                <div>Earth date : {props.earth_date} </div>
                <div>Sol : {props.sol} </div>
            </div>
        </div>
    )
}

export { RoverTopPhoto }