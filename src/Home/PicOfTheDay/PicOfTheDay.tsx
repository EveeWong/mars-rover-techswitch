import React, { useState, useEffect } from 'react';

function PicOfTheDay(props) {
    const [pictureData, setPictureData] = useState(null);

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => setPictureData(data));
    }, []);

    if (!pictureData) {
        return <div> Waiting for data!</div>
    }

    if (pictureData.media_type == "video") {
        return (
            <div>
                <h1>Nasa's feature of the day!</h1>
                <h2>{pictureData.title}</h2>
                <iframe width="320" height="240"
                    src={pictureData.url} >
                </iframe>
                {pictureData.explanation}
            </div>
        )
    } else if (pictureData.media_type == "image") {
        return (
            <div>
                <h1>Nasa's feature of the day!</h1>
                <h2>{pictureData.title}</h2>
                <img src={pictureData.url} width="320" />
                {pictureData.explanation}
            </div>
        )
    }

}

export { PicOfTheDay };