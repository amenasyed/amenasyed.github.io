import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import resume from "../images/amena-resume-2022.pdf";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="navigation">
            <header className="nav-container">
            <a href="/" className="nav-logo">a|s</a>

            <nav className="nav-menu" ref={navRef}>
                <a href="/work" className="nav-item">work</a>
                <a href="/about" className="nav-item">about</a>
                <a href={resume} className="nav-item">resume</a>
                <a href="mailto:a74syed@uwaterloo.ca" className="nav-item">contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes></FaTimes>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars></FaBars>
            </button>
         </header>
        </div>
    );
}

export default Navbar;