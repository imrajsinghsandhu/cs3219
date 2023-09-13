// Utility functions for user auth, for Frontend

const getAuthToken = () => {

    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
        return `Bearer ${jwtToken}`;
    } else {
        return null;
    }
}

export { getAuthToken };