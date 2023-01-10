import React from "react";
import "./Footer.css";
import {FaLinkedinIn, FaEnvelope, FaGithub} from "react-icons/fa";

function Footer() {
    return (
        <div class="footer-container">
            <footer>
                <p className="social-icons">
                    <a href="https://www.linkedin.com/in/amenasyed"><FaLinkedinIn></FaLinkedinIn></a>
                    <a href="mailto:a74syed@uwaterloo.ca"><FaEnvelope></FaEnvelope> </a>
                    <a href="https://github.com/amenasyed"><FaGithub></FaGithub></a>
                </p>
                <p>Made with 🍯 by Amena Syed © 2023</p>
            </footer>
        </div>
    );
}

export default Footer;