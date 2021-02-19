import React from 'react'
import '../Fonts.scss';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { Timeline } from 'react-twitter-widgets';
import './News.scss';
import { Header } from '../Header/Header';

function News() {
    return (
        <div className="news_container">
            <MobileNavbar />
            <div className='toppagebreak'></div>
            <Header 
                imgSource = {`${process.env.PUBLIC_URL}/images/Newspad.png`}
                altTag = 'news'
            />
            
            <h2>Nasa live TV</h2>
            <div className="video_container">
                <iframe className="live_news"
                    src='https://www.youtube.com/embed/21X5lGlDOfg'
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
            </div>
            <div className='middlepagebreak'></div>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'NASAMars'
                }}
            />
            <div className='bottompagebreak'></div>
        </div>

    )
}

export { News };