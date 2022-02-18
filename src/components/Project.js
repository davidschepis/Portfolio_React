import React, { useState } from 'react';
import autoparts from "../images/autoparts.png";
import notetaker from "../images/notetaker.png";
import socialnetworkapi from "../images/socialnetworkapi.png";
import techblog from "../images/techblog.png";
import texteditor from "../images/texteditor.png";
import weather from "../images/weather.png";

const p1 = {
    title: "Auto Parts Inventory Full-Stack Application",
    body: "Full-Stack application utilizing handlebars for the front-end, and node express/sequelize for the back-end",
    image: autoparts,
    githubURL: "https://github.com/IanMordaunt/Auto-Parts-Inventory",
    liveURL: "https://auto-parts-inventory-tracker.herokuapp.com/"
}

const p2 = {
    title: "Note Taker App",
    body: "Note taking application. Allows for creating/saving of titled notes",
    image: notetaker,
    githubURL: "https://github.com/davidschepis/Note_Taker",
    liveURL: "https://note-taker-app-345.herokuapp.com/"
}

const p3 = {
    title: "Social Network Backend",
    body: "Back-end for a social networking site",
    image: socialnetworkapi,
    githubURL: "https://github.com/davidschepis/Social_Network_API",
    liveURL: "https://drive.google.com/file/d/1hREa4dhzQxDrNTNX3puc2RBcSJ4GzdSb/view"
}

const p4 = {
    title: "Tech Blog Website",
    body: "Full-Stack application that allows for interacting with a fully functioning Tech Blog",
    image: techblog,
    githubURL: "https://github.com/davidschepis/Tech_Blog",
    liveURL: "https://tech-blog-432.herokuapp.com/"
}

const p5 = {
    title: "Progressive Web Application: Text Editor",
    body: "Text Editor with full PWA functionality",
    image: texteditor,
    githubURL: "https://github.com/davidschepis/Text_Editor",
    liveURL: "https://text-editor-1234.herokuapp.com/"
}

const p6 = {
    title: "Weather Dashboard",
    body: "Weather Dashboard application that allows for viewing the current forecast for any city",
    image: weather,
    githubURL: "https://github.com/davidschepis/Weather_Dashboard",
    liveURL: "https://davidschepis.github.io/Weather_Dashboard/"
}

function Project(props) {

    const cardStyle = {
        width: "24rem",
        height: "200px",
    }

    if (props.project === 1) {
        return (
            <div className="card h-100" style={cardStyle} onClick={() => props.showProjectModal(p1)}>
                <img className="card-img-top cardImage" src={autoparts} alt="Auto Parts Website" />
                <div className="card-body">
                    <h5 className="card-title">Auto Parts Inventory Full-Stack Application</h5>
                </div>
            </div>
        )
    }
    else if (props.project === 2) {
        return (
            <div className="card h-100" style={cardStyle} onClick={() => props.showProjectModal(p2)}>
                <img className="card-img-top cardImage" src={notetaker} alt="Auto Parts Website" />
                <div className="card-body">
                    <h5 className="card-title">Note Taker Application</h5>
                </div>
            </div>
        )
    }
    else if (props.project === 3) {
        return (
            <div className="card h-100" style={cardStyle} onClick={() => props.showProjectModal(p3)}>
                <img className="card-img-top cardImage" src={socialnetworkapi} alt="Auto Parts Website" />
                <div className="card-body">
                    <h5 className="card-title">Social Network Backend</h5>
                </div>
            </div>
        )
    }
    else if (props.project === 4) {
        return (
            <div className="card h-100" style={cardStyle} onClick={() => props.showProjectModal(p4)}>
                <img className="card-img-top cardImage" src={techblog} alt="Auto Parts Website" />
                <div className="card-body">
                    <h5 className="card-title">TechBlog Webpage</h5>
                </div>
            </div>
        )
    }
    else if (props.project === 5) {
        return (
            <div className="card h-100" style={cardStyle} onClick={() => props.showProjectModal(p5)}>
                <img className="card-img-top cardImage" src={texteditor} alt="Auto Parts Website" />
                <div className="card-body">
                    <h5 className="card-title">PWA Text-Editor</h5>
                </div>
            </div>
        )
    }
    else if (props.project === 6) {
        return (
            <div className="card h-100" style={cardStyle} onClick={() => props.showProjectModal(p6)}>
                <img className="card-img-top cardImage" src={weather} alt="Auto Parts Website" />
                <div className="card-body">
                    <h5 className="card-title">Weather Dashboard App</h5>
                </div>
            </div>
        )
    }
}

export default Project;