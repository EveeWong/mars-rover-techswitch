import React from 'react'

function Weather() {
    return <div className='weatherContainer'>
        <iframe className='weatherTable' src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='100%' height='600'  scrolling='no' ></iframe>
    </div>
}

export {Weather};