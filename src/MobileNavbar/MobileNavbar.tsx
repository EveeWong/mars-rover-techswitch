import React, { useState, useEffect } from 'react';
import './MobileNavbar.scss';

function MobileNavbar() {
    return (
        <div>
            <button type="button" className="mobile_nav_toggle" id="mobile_nav_toggle" onClick={toggleMobileNav}>
                X
            </button>

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
}

export { MobileNavbar };