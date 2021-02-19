import React from 'react'

function Weather() {
    return <div>
        <iframe className='weatherTable' src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='100%' height='650'  scrolling='no' frameBorder='0'></iframe>
    </div>
}

export {Weather};