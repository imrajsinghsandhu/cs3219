// manage user's login status and JWT token
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuthToken } from './authUtils';

const AuthContext = createContext({

});

const AuthProvider = ({ children }) => {
    const [jwtToken, setJwtToken] = useState(null);
    
    useEffect(() => {
        // Check if user is already authenticated on page load
        const jwtToken = localStorage.getItem('jwt_token');
        
        if (jwtToken) {
            const handleTokenValidation = async () => {
                // Send request to server for validation
                // update user state accordingly
                try {
                    // API call to backend to authenticate user token
                    const response = await fetch("http://localhost:4000/api/users/is-token-valid", {
                        method: "POST",
                        body: JSON.stringify(jwtToken),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                
                    if (response.status === 200) {
                        console.log("Valid token!");
                    } else {
                        console.error("JWT token is not valid!");
                    }
                } catch (error) {
                    console.error("Theres en error!", error);
                }
            }
            handleTokenValidation();
        }
    }, [])
    
    const login = async (formData) => {
        // Save the token to local storage
        try {
            // API call to backend to authenticate user
            const response = await fetch("http://localhost:4000/api/users/sign-in", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                const data = await response.json();
                const jwtToken = data.token;
                await localStorage.setItem('jwt_token', jwtToken);
                setJwtToken(jwtToken);
            }
        } catch (error) {
            console.error("Theres an error while not logged in!", error);
        }
    }
    
    const logout = async () => {
        try {
            // API call to backend to authenticate user
            const response = await fetch("http://localhost:4000/api/users/logout", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuthToken()
                }
            })
            if (response.status === 200) {
                await localStorage.removeItem('jwt_token');
                setJwtToken(null);
            } else {
                console.error('Error during logout');
            }
        } catch (error) {
            console.error("Theres en error!", error);
        }
    };
    
    return (
        <AuthContext.Provider value={{ jwtToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }