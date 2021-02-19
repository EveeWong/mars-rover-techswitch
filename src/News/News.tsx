import React from 'react'
import '../Fonts.scss';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { Timeline } from 'react-twitter-widgets';
import './News.scss';

function News() {
    return (
        <div className="news_container">
            <MobileNavbar />
            <h1>News</h1>
            <h2>Nasa live TV</h2>
            <div className="video_container">
                <iframe className="live_news"
                    src='https://www.youtube.com/embed/21X5lGlDOfg'
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
            </div>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'NASAMars',
                    // theme: isDarkMode ? 'dark' : 'light'
                }}
            />
        </div>

    )
}

export { News };