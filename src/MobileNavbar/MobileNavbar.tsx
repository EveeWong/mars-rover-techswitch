import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
                bgElements[i].classList.add("blurred_bg");
            }
        } else {
            for (let i = 0; i < bgElements.length; i++) {
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rovers">Rovers</Link></li>
                    <ul className="rover_list">
                        <li><Link to="/rovers/curiosity" id="rover1">Curiosity</Link></li>
                        <li><Link to="/rovers/spirit" id="rover2">Spirit</Link></li>
                        <li><Link to="#" id="rover3">Opportunity</Link></li>
                    </ul>
                    <li><Link to="#">News</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export { MobileNavbar };