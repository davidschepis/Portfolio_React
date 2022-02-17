import React, { useState, useEffect } from 'react';
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
                <a href="index.html">
                    <img src={portfolio} alt="Portfolio Icon" style={imgStyle} />
                    <p id="logoText">My Portfolio</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => props.navigate("aboutMe")} style={aboutMeStyle}
                                id={props.page === "aboutMe" ?
                                    "selectedNav" : ""
                                }>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => props.navigate("projects")}  
                            id={props.page === "projects" ?
                                    "selectedNav" : ""
                                }>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => props.navigate("resume")}
                             id={props.page === "resume" ?
                             "selectedNav" : ""
                         }>Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => props.navigate("contactMe")}
                             id={props.page === "contactMe" ?
                             "selectedNav" : ""
                         }>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;