import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useStoreManager from '../Hooks/useStoreManager';
import Loader from '../components/Loader/Loader';
import useAdmin from '../Hooks/useAdmin';

const StoreManagerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isStoreManager, isStoreManagerLoading] = useStoreManager()
    const location = useLocation();

    if (loading || isStoreManagerLoading || isAdminLoading) {
        return <Loader />
    }
    if (user && (isStoreManager || isAdmin)) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default StoreManagerRoute;