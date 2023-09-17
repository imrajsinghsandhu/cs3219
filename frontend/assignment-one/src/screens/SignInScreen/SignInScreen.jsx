import React, { useState, useEffect } from "react";
import "./SignInScreen.css";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

/**
 * User will not be signed in first. They will have to input their username/email & password to sign in
 * or click forgot password
 * or click sign up button
 */ 
const SignInScreen = () => {

    const { user, login } = useAuth();
    const navigate = useNavigate(); 

    const [isLoading, setIsLoading] = useState(true); // Add isLoading state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (user) {
            navigate("/questions");
        }
        console.log("before rendering signinScreen");
    }, [user, navigate])

    const handleChange = (input) => {
        const { name, value } = input.target;
        setFormData({
            ...formData, 
            [name]:value, 
        })
    }
    
    const handleSignIn = async () => {
        await login(formData);
    }

    const renderSignInScreen = () => {
        console.log("Rendering sign in screen...");
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