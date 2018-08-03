import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p>
                    {(new Date().getFullYear())} {'\u00a9'}  Williams-Sonoma Inc., All Rights Reserved 
                </p>
                <span className="footer-break"> | </span>
                <a href="#" className="footer-link">
                    Terms and Conditions
                </a>
                <span className="footer-break"> | </span>
                <a href="#" className="footer-link">
                    Privacy Policy
                </a>
                <span className="footer-break"> | </span>
                <a href="#" className="footer-link">
                    Legal Statement
                </a>
            </div>
        </div>
    )

}

export default Footer;