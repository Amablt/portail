import React from 'react';
import { Navigate } from 'react-router-dom';
 const RequireAuth = ({children}) => {
    let logged = false

    if(logged){
        return <Navigate to="/Login" />
    }
    return  children
   
}
export default RequireAuth;