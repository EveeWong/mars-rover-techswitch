import React, { useState, useEffect, useRef } from 'react';
import { createUnparsedSourceFile } from 'typescript';
import './MobileNavbar.scss';

function useMenuVisible(initialIsVisible) {
    const [isMenuVisible, setIsMenuVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
    }, []);

    useEffect(() => {
        var bgElements = document.querySelectorAll('#mobile_nav_container ~ *');
        if (isMenuVisible) {
            for (let i = 0; i < bgElements.length; i++) {
                // bgElements[i].className += "blurred_bg";
                bgElements[i].classList.add("blurred_bg");
            }
        } else {
            for (let i = 0; i < bgElements.length; i++) {
                // remove blurred_class from each element
                // bgElements[i].className -= "blurred_bg";   
                bgElements[i].classList.remove("blurred_bg");   
            }
        }
    }, [isMenuVisible]);

    return { ref, isMenuVisible, setIsMenuVisible };
}

function MobileNavbar() {
    const { ref, isMenuVisible, setIsMenuVisible } = useMenuVisible(false);
    return (
        <div className="mobile_nav_container" id="mobile_nav_container" ref={ref}>
            <div className={`mobile_nav_toggle ${isMenuVisible ? 'toggle_fixed' : ''}`} id="mobile_nav_toggle" onClick={() => { setIsMenuVisible(!isMenuVisible) }}>
                <div className={`bar1 ${isMenuVisible ? 'change' : ''}`}></div>
                <div className={`bar2 ${isMenuVisible ? 'change' : ''}`}></div>
                <div className={`bar3 ${isMenuVisible ? 'change' : ''}`}></div>
            </div>
            <nav className={`mobile_nav ${isMenuVisible ? 'mobile_nav_visible' : ''}`} id="mobile_nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Rovers</a></li>
                    <ul className="rover_list">
                        <li><a href="#" id="rover1">Rover 1</a></li>
                        <li><a href="#" id="rover2">Rover 2</a></li>
                        <li><a href="#" id="rover3">Rover 3</a></li>
                    </ul>
                    <li><a href="#">News</a></li>
                </ul>
            </nav>
        </div>
    )
}

function toggleMobileNav(isMenuVisible, setIsMenuVisible) {
    var navbar = document.getElementById("mobile_nav");
    navbar.classList.toggle("mobile_nav_visible");
    // if mobile nav visible, add event listener for clicking outside the menu

    // Blur the background when menu is visible. Select all following sibling elements of the mobile nav bar 
    // (mobile nav bar needs to be the first component on the page for this to work). 
    // Toggle the blurred class for these elements 
    var bgElements = document.querySelectorAll('#mobile_nav_container ~ *');
    for (let i = 0; i < bgElements.length; i++) {
        bgElements[i].classList.toggle("blurred_bg");
    }

    setIsMenuVisible(!isMenuVisible);
}

function animateMenuIcon() {
    var button = document.getElementById("mobile_nav_toggle");
    button.classList.toggle("change");
}

export { MobileNavbar };