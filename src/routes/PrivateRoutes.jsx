import React, { Children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Pages/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    if(loading){
        return <Loading />;
    }
    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoutes;