import React, {useState} from "react";
import { getAuthToken } from "../../utils/authUtils";

const EmailChange = () => {

    const [newEmail, setNewEmail] = useState({
        email:"",
    });
    
    const handleChangeEmail = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/users/profile", {
                method: "PUT",
                body: JSON.stringify(newEmail),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuthToken()
                }
            })

            if (response.status === 200) {
                // we have gotten the user's details
                alert('Email updated successfully! Log-in again!');
            }
        } catch (error) {
            console.error("Theres en error!", error);
        }
    }

    const changeEmail = (input) => {
        const { name, value } = input.target;
        setNewEmail({
            ...newEmail, 
            [name]:value
        });
    }
    
    return <div>
        <div className="change-email-components">
            <h1>Change your email</h1>
            <form>
                <div className="input-box-change-email">
                    <label>New Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={newEmail.email}
                        onChange={changeEmail}
                    />
                    <button type="button" className="sign-in-out-button" onClick={handleChangeEmail}>Change Email</button>
                </div>
            </form>
        </div>
    </div>
}

export default EmailChange;