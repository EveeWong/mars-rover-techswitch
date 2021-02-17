import React, { useState, useEffect } from 'react';
import './MobileNavbar.scss';

function MobileNavbar() {
    return (
        <div className="mobile_nav_container" id="mobile_nav_container">
            <div className="mobile_nav_toggle" id="mobile_nav_toggle" onClick={() => { toggleMobileNav(); animateMenuIcon() }}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <nav className="mobile_nav" id="mobile_nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Rovers</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </nav>
        </div>
    )
}

function toggleMobileNav() {
    var navbar = document.getElementById("mobile_nav");
    navbar.classList.toggle("mobile_nav_visible");
    // Blur the background when menu is visible. Select all following sibling elements of the mobile nav bar 
    // (mobile nav bar needs to be the first component on the page for this to work). 
    // Toggle the blurred class for these elements 
    var bgElements = document.querySelectorAll('#mobile_nav_container ~ *');
    for (let i = 0; i < bgElements.length; i++) {
        bgElements[i].classList.toggle("blurred_bg");
    }
}

function animateMenuIcon() {
    var button = document.getElementById("mobile_nav_toggle");
    button.classList.toggle("change");
}

export { MobileNavbar };