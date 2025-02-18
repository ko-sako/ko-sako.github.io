import React from "react";
import "../styles.css";

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <a href="index.html">
                    <img src="assets/TopLogo-default.png" alt="TopLogo" class="TopLogo" />
                    <img src="assets/TopLogo-hover.png" alt="TopLogo Hover" class="TopLogo-hover" />
                </a>
                <div className="menu">
                    <a href="#about">About</a> <a href="#works">Works</a> <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;

