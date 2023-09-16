import React, { useState } from "react";
import "./SignInScreen.css";

/**
 * User will not be signed in first. They will have to input their username/email & password to sign in
 * or click forgot password
 * or click sign up button
 */
const SignInScreen = (props) => {
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
    
    const handleSignIn = async (formData) => {
        await props.login(formData);
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
                        <button type="button" className="sign-in-out-button" onClick={handleSignIn}>Sign in</button>
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