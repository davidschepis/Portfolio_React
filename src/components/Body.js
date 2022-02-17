import React, { useState } from 'react';
import Project from "./Project";

function Body(props) {
    if (props.page === 'aboutMe') {
        return (
            <section className="mainSection container">
                <div className="row">
                    <div className="col my-auto">
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
            <section className="mainSection">
                <h1 className="sectionTitle">Projects</h1>
            </section>
        )
    }
    else if (props.page === 'resume') {
        return (
            <section className="mainSection">
                <h1 className="sectionTitle">Resume</h1>
            </section>
        )
    }
    else if (props.page === 'contactMe') {
        return (
            <section className="mainSection">
                <h1 className="sectionTitle">Contact Me</h1>
            </section>
        )
    }
}

export default Body;