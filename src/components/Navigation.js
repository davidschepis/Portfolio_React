import React, { useState } from 'react';
import portfolio from "../images/portfolio.png";

const imgStyle = {
    height: '60px',
    width: '60px'
}

const aboutMeStyle = {
    borderLeft: 'solid var(--c3) 1px'
}

function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a href="index.html" id="logoLink">
                    <img className="logo" src={portfolio} alt="Portfolio Icon"
                        id="portfolio" style={imgStyle}/>
                    <p className="logo">My Portfolio</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutMe" style={aboutMeStyle}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactMe">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;