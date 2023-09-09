import React from "react";
import "./Header.css";

const Header = (props) => {

    const isLoggedIn = props.isLoggedIn;

    const renderHeader = () => {
       return <div className="header">
            <a href="#default" className="logo">PeerPrep</a>
            <div className="header-right">
                {
                    isLoggedIn 
                    ? <button className="sign-in-out-button" onClick={props.handleUserSignOut}>Sign Out</button> 
                    : <button className="sign-in-out-button" onClick={props.handleUserSignIn}>Sign In</button>
                }
            </div>
        </div>
    }
    
    return <div>
        {renderHeader()}
    </div>
}

export default Header;