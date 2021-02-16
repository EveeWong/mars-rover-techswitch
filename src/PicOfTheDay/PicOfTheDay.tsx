import React, {useState, useEffect } from 'react';
import ReactPlayer from "react-player"

function PicOfTheDay(props) {
    const[myData,setMyData] = useState(null);

    useEffect(()=>{
        fetch ("https://api.nasa.gov/planetary/apod?api_key=AdX53bpIZLYgz7TdNnGiGVcOGGGttMPnLhni9LxO ")
        .then(response=>response.json())
        .then(data=> setMyData(data));
            },[]);
            
    if (!myData) {
        return <div> Waiting for data!</div>
    } 
    
    if (myData.media_type == "video") {
        return (
            <div>
                <h1>Nasa's feature of the day!</h1>
                <h2>{myData.title}</h2>
                <iframe width="320" height="240" 
                    src ={myData.url} >
                </iframe>
                {myData.explanation}
            </div>
        )        
    } else if (myData.media_type == "image") {
        return (
            <div>
                <h1>Nasa's feature of the day!</h1>
                <h2>{myData.title}</h2>
                <img src = {myData.url} width = "320"/>
                {myData.explanation}
            </div>
        )   
    }
   
}

export { PicOfTheDay };




