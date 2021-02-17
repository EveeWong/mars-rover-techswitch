import React from 'react';


function Footer(){
    return<div className='footerMobile' >
        <img  className='footerImg' src={`${process.env.PUBLIC_URL}/images/mars-horizon-day.png`}/>
    </div>
}

export {Footer};