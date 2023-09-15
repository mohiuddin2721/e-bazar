import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const accessToken = localStorage.getItem("access-token");
    const location = useLocation();

    if (accessToken) {
        return children;
    }

    return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;