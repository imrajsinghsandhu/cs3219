import React, { useState } from "react";
import "./SignUpScreen.css";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
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
    
    const handleSignUp = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/users/sign-up", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                const { message } = await response.json();
                console.log(message); // Handle the response data as needed
                navigate('/');
            } else {
                console.error('Sign-up failed'); // Handle the error case
            }
        } catch (error) {
            console.error('Error:', error); // Handle network or other errors
        }
    }

    const renderSignUpScreen = () => {

        return (
            <div className="sign-in-components">
                <h1>Sign Up</h1>
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
                        {/* When u dont put type="button", it will submit the fields, and cause a re-render of the whole component */}
                        <button type="button" className="sign-in-out-button" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }

    return <div>
        {renderSignUpScreen()}
    </div>
}

export default SignUpScreen;