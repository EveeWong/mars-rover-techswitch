import React from 'react';
import './Header.scss'

interface HeaderName {
    imgSource: string,
    altTag: string,
}

function Header(props: HeaderName) {
    return<div className='headerContainer'>
            <img className='pageTitle' src={props.imgSource} alt={props.altTag}/>
            <img className='nasaLogo' src={`${process.env.PUBLIC_URL}/images/NASA_logo.png`}/>
        </div>
}

export { Header }

