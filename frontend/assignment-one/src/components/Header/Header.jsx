import React, {useState} from "react";
import FeatherIcon from "feather-icons-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    const navigate = useNavigate();
    
    const [isSignedIn, setSignedIn] = useState(false);

    const handleUserSignIn = () => {
        navigate('/sign-in');
        setSignedIn(true);
    }
    const handleUserSignOut = () => {
        setSignedIn(false);
    }

    const handleUserIconClick = () => {
        navigate('/user-profile');
    }

    const renderHeader = () => {
       return <div className="header">
            <a href="#default" className="logo">PeerPrep</a>
            <div className="header-right">
                {
                    isSignedIn 
                    ? (
                        <div className="header-right-components">
                            <button className="profile-button" onClick={handleUserIconClick} >
                                <FeatherIcon icon="user"/>
                            </button>
                            <button className="sign-in-out-button" onClick={handleUserSignOut}>Sign Out</button>
                        </div>
                    ) 
                    : <button className="sign-in-out-button" onClick={handleUserSignIn}>Sign In</button>
                }
            </div>
        </div>
    }
    
    return <div>
        {renderHeader()}
    </div>
}

export default Header;