import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ Component, redirectTo, user, ...rest }) => {
    
    return (
        <Route
            {...rest}
            render={props => {
                user ? <Component  {...props} user={user} /> : <Redirect to={redirectTo} />
            }
            }
        />
    );
}
