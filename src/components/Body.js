import React, { useState } from 'react';
import Project from "./Project";
import { Modal } from "react-bootstrap";


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

    if (props.page === 'aboutMe') {
        return (
            <section className="mainSection container">
                <div className="row">
                    <div className="col my-auto text-center">
                        <h1 className="sectionTitle ">About Me</h1>
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

                {/* <div className="modal" tabindex="-1" role="dialog" id="projectModal"> */}
                <Modal size="xl" show={showModal} className="modal" tabIndex="-1" role="dialog" id="projectModal">
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
                    {/* </div> */}
                </Modal>
            </section>
        )
    }
    else if (props.page === 'resume') {
        return (
            <section className="mainSection container">
                <h1 className="sectionTitle">Resume</h1>
            </section>
        )
    }
    else if (props.page === 'contactMe') {
        return (
            <section className="mainSection container">
                <h1 className="sectionTitle">Contact Me</h1>
            </section>
        )
    }
}

export default Body;