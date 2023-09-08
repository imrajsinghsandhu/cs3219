import React, { useState } from "react";
import "./SignInScreen.css";
import Questions from "../../components/Questions/Questions";

/**
 * User will not be signed in first. They will have to input their username/email & password to sign in
 * or click forgot password
 * or click sign up button
 */
const SignInScreen = () => {
    const [isSignedIn, setSignedIn] = useState(false);

    const renderSignInScreen = () => {
       
    }

    return <div>
        {renderSignInScreen()}
    </div>
}

export default SignInScreen;