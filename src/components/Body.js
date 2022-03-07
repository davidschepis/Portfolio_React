import React, { useState } from 'react';
import Project from "./Project";
import { Modal } from "react-bootstrap";

import pdf from "../images/pdf.svg";
import docx from "../images/word.svg";
import txt from "../images/txt.svg";

import pdfLink from "../documents/resume.pdf";
import wordLink from "../documents/resume.docx";
import txtLink from "../documents/resume.txt";

import worker from "../images/worker.png";

import { send } from "emailjs-com";

const workerStyle = {
    height: '150px',
    width: '150px',
    marginTop: '50px'
};

function Body(props) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [URL1, setURL1] = useState("");
    const [URL2, setURL2] = useState("");

    const [showModal, setModal] = useState(false);

    const closeProjectModal = () => {
        setModal(false)
    };

    const showProjectModal = (data) => {
        setTitle(data.title);
        setBody(data.body);
        setImage(data.image);
        setModal(true);
        setURL1(data.githubURL);
        setURL2(data.liveURL);
    };

    const [textArea, setTextArea] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleText = (e) => {
        setTextArea(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const showWarning = (num) => {
        if (num === 1 && name === "") {
            setWarning("Please enter your name to submit");
        } else if (num === 2 && email === "") {
            setWarning("Please enter your email address to submit");
        } else if (num === 3 && textArea === "") {
            setWarning("Please enter a message");
        } else {
            setWarning("");
        }
    };

    const [warning, setWarning] = useState("");
    const [emailWarning, setEmailWarning] = useState("");

    const checkForm = () => {
        if (name !== "" && email !== "" && textArea !== "") {
            setButtonDisplay("block");
        }
        else {
            setButtonDisplay("none");
        }
        if (email !== "") {
            if (!validateEmail(email)) {
                setEmailWarning("Please enter a valid email address");
            }
            else {
                setEmailWarning("");
            }
        }
    };

    const validateEmail = (e) => {
        const regex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
        return regex.test(e);
    };

    const [buttonDisplay, setButtonDisplay] = useState("none");

    const buttonStyle = {
        display: buttonDisplay
    };

    const handleForm = (e) => {
        e.preventDefault();
        send(
            "service_wuhya3h",
            "template_pjc0suj",
            {
                from_name: email,
                to_name: "davids.developer@outlook.com",
                message: textArea,
                reply_to: "David"
            },
            "FOJLys6bTtEVJKml2"
        )
        .then((response) => {
            console.log("Email sent", response.status, response.text);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    if (props.page === 'aboutMe') {
        return (
            <section className="mainSection container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="sectionTitle ">About Me</h1>
                        <img src={worker} alt="Worker Image" style={workerStyle} />
                    </div>
                    <div className="col">
                        <p className="bio">
                            &#8226; My name is David Schepis and I am an aspiring web developer.
                            I have a CS background and am currently attending a coding bootcamp
                            hosted by the University of Arizona.
                        </p>
                        <p className="bio">
                            &#8226; Web development has been a passion of mine since I first discovered
                            the joy of writing code. Coding is an incredibly rewarding experience, and I
                            enjoy figuring out how to turn code into applications that will be used and loved
                            by many.
                        </p>
                        <p className="bio">
                            &#8226; In my free time I enjoy making music, which I release on youtube under the moniker
                            Bluevelvet Music.
                            I play multiple instruments and enjoy the challenge of writing, recording, and mixing/mastering
                            my own
                            songs.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
    else if (props.page === 'projects') {
        return (
            <section className="mainSection container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="sectionTitle">Projects</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Project project={1} showProjectModal={showProjectModal} />
                    </div>
                    <div className="col">
                        <Project project={2} showProjectModal={showProjectModal} />
                    </div>
                    <div className="col">
                        <Project project={3} showProjectModal={showProjectModal} />
                    </div>
                    <div className="col">
                        <Project project={4} showProjectModal={showProjectModal} />
                    </div>
                    <div className="col">
                        <Project project={5} showProjectModal={showProjectModal} />
                    </div>
                    <div className="col">
                        <Project project={6} showProjectModal={showProjectModal} />
                    </div>
                </div>

                <div onClick={closeProjectModal}>
                    <Modal size="xl" onClick={e => e.stopPropagation()} show={showModal} className="modal" tabIndex="-1" role="dialog" id="projectModal">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitle">{title}</h5>
                                    <button type="button" className="close" aria-label="Close" onClick={() => closeProjectModal()}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body text-center" id="modalBody">
                                    <img src={image} alt="Project Example" />
                                    {body}
                                    <div>
                                        <button type="button" className="btn m-1 modalButton" onClick={() => window.open(URL1)}>Github</button>
                                        <button type="button" className="btn m-1 modalButton" onClick={() => window.open(URL2)}>Live Page</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </section>
        )
    }
    else if (props.page === 'resume') {
        return (
            <section className="mainSection container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="sectionTitle" id="resumeHeader">Resume</h1>
                    </div>
                    <div className="col text-center">
                        <h1 className="sectionTitle">Download</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div id="resumeText">
                            <ul> <h3>Proficiencies</h3>
                                <h5>Languages:</h5> <li>
                                    Java, Javascript, ES6, HTML, CSS, C, SQL
                                </li>
                                <h5>Libraries:</h5><li>
                                    jQuery, Bootstrap, Node.js, Express.js, React, Handlebars
                                </li>
                                <h5>Methodologies:</h5><li>
                                    MVC, MERN, PWA, REST
                                </li>
                                <h5>Databases:</h5><li>
                                    MongoDB, MySQL, MariaDB
                                </li>
                                <h5>Misc:</h5><li>
                                    JSON, BASH, Unix/Linux
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col text-center my-auto">
                        <a href={pdfLink} download>
                            <img src={pdf} alt="PDF Logo" className="fileLogo" />
                        </a>
                        <a href={wordLink} download>
                            <img src={docx} alt="Docx Logo" className="fileLogo" />
                        </a>
                        <a href={txtLink} download>
                            <img src={txt} alt="Text Logo" className="fileLogo" />
                        </a>
                    </div>
                </div>
            </section>
        )
    }
    else if (props.page === 'contactMe') {
        return (
            <section className="mainSection container">
                <h1 className="sectionTitle">Contact Me</h1>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" value={name} onChange={handleName} placeholder="Enter Name" onBlur={() => showWarning(1)} onKeyUp={checkForm}></input>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" value={email} onChange={handleEmail} placeholder="Enter Email" onBlur={() => showWarning(2)} onKeyUp={checkForm}></input>
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea className="w-100" value={textArea} onChange={handleText} onBlur={() => showWarning(3)} placeholder="Enter Message" onKeyUp={checkForm}></textarea>
                    </div>
                    <h1 id="warningText">{warning}</h1>
                    <h1 id="warningText">{emailWarning}</h1>
                    <button type="submit" className="btn btn-primary" style={buttonStyle} onClick={handleForm}>Submit</button>
                </form>
            </section>
        )
    }
}

export default Body;