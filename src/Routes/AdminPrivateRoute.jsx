import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminPrivateRoute = ({children}) => {
    const location = useLocation()
    const [isAdmin,isAdminLoading] = useAdmin() 
    const {user,loading} = useAuth()
    if(loading || isAdminLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }

    return  <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminPrivateRoute;