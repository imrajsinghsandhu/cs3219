// Utility functions for user auth, for Frontend

const getAuthToken = () => {

    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
        return `Bearer ${jwtToken}`;
    } else {
        return null;
    }
}

/**
 * Check whether the jwt token, if exists, is valid or not
 * @returns boolean
 */
const getAuthStatus = async () => {
    try {
        const authHeader = getAuthToken();
        
        if (!authHeader) {
            console.warn("No token found!");
            return false;
        }

        const response = await fetch("http://localhost:4000/api/users/is-token-valid", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader
            }
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log(data.message);
            return true;
        } else {
            console.log("Interacting with the backend produced a non-200 status code:", response.status);
            return false;
        }
    } catch (error) {
        console.error("An error occurred while checking the JWT token:", error);
        return false;
    }
};


export { getAuthToken, getAuthStatus };