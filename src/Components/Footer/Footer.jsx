import React from "react";
import './Footer.css';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear(); 

    return(
        <footer className="section-footer">
            <p className="footer-text">Daniel Barrera Web Portfolio | {year}</p>
        </footer>
    )
}

export default Footer;