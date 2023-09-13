import React from "react";
import "./UserProfileScreen.css";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../../utils/authUtils";
import Heatmap from "../../components/Heatmap/Heatmap";
import EmailChange from "../../components/EmailChange/EmailChange";

/**
 * User profile screen will have 
 * 1. Activity graph, like on github
 * 2. Questions completed
 */

const UserProfileScreen = () => {
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/users/delete-account", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuthToken()
                }
            })

            if (response.status === 200) {
                localStorage.removeItem('jwt_token');
                console.log("Token has been deleted, successfully deleted account!");
                alert("Account deleted successfully!");
                navigate('/sign-in');
            }
        } catch (error) {
            console.error("Theres en error!", error);
        }
    }

    const renderDeleteButton = () => {
        return <div className="sign-in-components">
            <button type="button" onClick={handleDeleteAccount} className="delete-button">Delete Account</button>
        </div>
    }

    return <div>
        {/* 
        The two components below have been separated, due to expensive rendering of 
        Heatmap data. It takes alot of time for it to render, and previously, rendering 
        both the changeemail & heatmap in the same component will cause heatmap useEffect
        data to keep re-rendering as the newEmail field of changeEmail keeps changing state.
        It makes the page very unresponsive. Seprated components will ensure that while 
        newEmail is typed and state is changed, the heatmap's data stays the same and not
        re-rendering everytime newEmail is changed.
        */}
        <EmailChange/>
        <Heatmap/>
        {renderDeleteButton()}
    </div>
}

export default UserProfileScreen;