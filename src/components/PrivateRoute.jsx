import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({loginStatus,children}) {
    if(loginStatus){
        return children;
    }
    else{
       return <Navigate to='/login'></Navigate>
    }
}

export default PrivateRoute;