import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loader/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user || !user?.email) {
        return <Navigate to="/signin" state={location?.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;