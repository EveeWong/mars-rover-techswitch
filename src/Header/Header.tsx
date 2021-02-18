import React from 'react';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import './Header.scss'

function Header() {
    return<div className='headerContainer'>
            <MobileNavbar />
            <img className='nasaLogo' src={`${process.env.PUBLIC_URL}/images/NASA_logo.png`} />
        </div>
}

export { Header }