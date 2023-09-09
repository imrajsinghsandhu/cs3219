import React, { useState } from "react";
import "./SignInScreen.css";
import { useNavigate } from "react-router-dom";

/**
 * User will not be signed in first. They will have to input their username/email & password to sign in
 * or click forgot password
 * or click sign up button
 * 
 * For ease, we will now only implement capability to put in email and password, 
 * and backend will handle authorization/account creation
 */
const SignInScreen = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (input) => {
        const { name, value } = input.target;
        setFormData({
            ...formData, 
            [name]:value, 
        })
    }
    
    const handleSignIn = () => {
        // API call to backend to authenticate user
        
        // re-route to questions page upon successful authentication
        // if (successful) {}
        navigate('/questions');
    }


    const renderSignInScreen = () => {
       
        return (
            <div className="sign-in-components">
                <h1>Sign in page</h1>
                <form>
                    <div className="input-boxes-sign-in">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button className="sign-in-button" onClick={handleSignIn}>Sign in</button>
                    </div>
                </form>
            </div>
        )
    }

    return <div>
        {renderSignInScreen()}
    </div>
}

export default SignInScreen;