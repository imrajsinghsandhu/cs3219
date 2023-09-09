import React from "react";
import "./Footer.css";

const Footer = () => {

    const renderFooter = () => {

        return <div className="footer">
            <text className="footer-text">Footer</text>
        </div>
    }

    return <div>
        {renderFooter()}
    </div>
}

export default Footer;