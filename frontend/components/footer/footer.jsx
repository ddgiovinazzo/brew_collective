import React from "react";

const Footer = () => {
    return (
        <div className="footer-container">
            <a className="btn btn-primary tooltip" href="https://github.com/ddgiovinazzo/" target="_blank"><i className="fab fa-github fa-2x"></i>
                <div className="top">
                    <p>GitHub<i></i></p>

                </div>
            </a>
            <a className="btn btn-primary tooltip" href="https://www.linkedin.com/in/domenicodanielgiovinazzo/" target="_blank"><i className="fab fa-linkedin-in fa-2x"></i>
                <div className="top">
                    <p>LinkedIn<i></i></p>

                </div>
            </a>
            <a className="btn btn-primary tooltip" href="https://angel.co/u/domenicodanielgiovinazzo" target="_blank"><i className="fab fa-angellist fa-2x"></i>
                <div className="top">
                    <p>AngelList<i></i></p>

                </div>
            </a>
        </div>
    )
}

export default Footer