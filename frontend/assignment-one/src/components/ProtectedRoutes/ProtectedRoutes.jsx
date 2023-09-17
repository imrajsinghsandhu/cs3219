import React from "react";
import "./ProtectedRoutes.css";
import { useAuth } from "../../utils/AuthContext";
import { BrowserRouter as Route } from "react-router-dom";
import SignInScreen from "../../screens/SignInScreen/SignInScreen";

const ProtectedRoute = (props) => {

    const { user } = useAuth();
    
    if (!user) {
        // Redirect to login page
        return <Route path="/" element={<SignInScreen/> } />;
    }

    return props.children;
}

export default ProtectedRoute;