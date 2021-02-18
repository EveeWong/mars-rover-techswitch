import React from 'react';
import './RoverPhoto.scss';
import { RoverTopPhoto } from '../RoverPhoto/RoverTopPhoto';
import { useState, useEffect } from "react";

function RoverPhoto(props) {
    const [clickedImage, setClickedImage] = useState(props.photoData[0]);

    useEffect(() => {
        setClickedImage(props.photoData[0])
    }, [props])

    return (
        <div >
            <div>
                <RoverTopPhoto img_src={clickedImage.img_src} full_name={clickedImage.camera.full_name} earth_date={clickedImage.earth_date} sol={clickedImage.sol} />
            </div>
            <div className="img-rover-restofimages">
                <div>
                    {props.photoData.map(photo => <img className="img-rover-photo-list" src={photo.img_src}
                        onClick={() => setClickedImage(photo)} />)}
                </div>
            </div>
        </div>
    )
}

export { RoverPhoto }