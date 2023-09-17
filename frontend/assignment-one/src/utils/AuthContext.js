// manage user's login status and JWT token
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuthToken } from './authUtils';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // Block the UI in the beginning to prevent children screen from showing first before user token validation
    // we do that by having the loadingInitial value here, initialised to true
    const [loadingInitial, setLoadingInitial] = useState(true);

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
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': getAuthToken()
                        }
                    })
                
                    if (response.status === 200) {
                        console.log("Valid token!");
                        setUser({_id: "exampleUserId"});
                    } else {
                        setUser(null);
                    }

                } catch (error) {
                    console.error("Theres en error!", error);
                } finally {
                    // This is what ensures the UI doesnt load the child screen before the user jwt token is 
                    // validated. It is soooo useful, and must rmb this!
                    setLoadingInitial(false);
                }
            }
            handleTokenValidation();
        } else {
            // This is here so when the jwtToken does not exist, then the relevant children can be loaded too
            setLoadingInitial(false);
        }

    }, [])
    
    const login = async (formData) => {
        setLoading(true);

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
                const user = data.token;
                setUser({_id:"exampleUserId"});
                await localStorage.setItem('jwt_token', user);
                console.log("signed in successfully");
            }
        } catch (error) {
            console.error("Theres an error while not logged in!", error);
        } finally {
            setLoading(false);
        }
    }
    
    const logout = async () => {
        setLoading(true);

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
                setUser(null);
            } else {
                console.error('Error during logout');
            }
        } catch (error) {
            console.error("Theres en error!", error);
        } finally {
            // regardless of the promise resolution
            setLoading(false);
        }
    };
    
    const value = {
        user, 
        login,
        logout,
        isLoading
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }