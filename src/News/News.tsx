import React from 'react'
import '../Fonts.scss'; 
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { Timeline } from 'react-twitter-widgets';
import './News.scss';

function News (){
    return(
        <div className="news_container">
            <MobileNavbar />
            <h1>News</h1>
            <Timeline 
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'NASAMars'
                }}
            />
        </div>
        
    )
}

export { News };