import React from 'react';
import logo1 from "../images/github.png";
import logo2 from "../images/linkedin.png";
import logo3 from "../images/stackoverflow.png"

function Footer() {
    return (
        <div>
            <footer className="page-footer">
                <div className="container">
                    <div className="row justify-content-center" id="footerLinks">
                        <div className="col-5">
                            <ul>
                                <li>
                                    <a href="https://github.com/davidschepis" target="_blank" rel="noreferrer"><img src={logo1} className="footerLogo m-2" alt="Github logo"/></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/david-schepis-530790199/" target="_blank" rel="noreferrer"><img src={logo2} className="footerLogo m-2" alt="Linkedin logo"/></a>
                                </li>
                                <li>
                                    <a href="https://stackoverflow.com/users/18229717/davids" target="_blank" rel="noreferrer"><img src={logo3} className="footerLogo stackLogo m-2" alt="Stack overflow logo"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;