import React from "react";
import "./Footer.css";

const Footer = () => {

    const renderFooter = () => {
        return <footer className="footer">
            <p>
                Copyright @PeerPrep 2023
            </p>
        </footer>
    }

    return <div>
        {renderFooter()}
    </div>
}

export default Footer;