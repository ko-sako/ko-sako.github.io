import React from "react";
import "../styles.css";

const Header = () => {
    return (
        <header>
            <nav class="navbar">
                <a href="index.html">
                    <img src="assets/TopLogo-default.png" alt="TopLogo" class="TopLogo" /> <!-- default top logo image -->
                    <img src="assets/TopLogo-hover.png" alt="TopLogo Hover" class="TopLogo-hover" /> <!-- hovering top logo -->
                </a>
                <!-- <div class="hamburger-menu">&#9776;</div> -->
                <div class="menu">
                    <!-- <a href="#top">Kayo OSAKO</a> -->
                    <a href="#about">About</a> <a href="#works">Works</a> <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;

