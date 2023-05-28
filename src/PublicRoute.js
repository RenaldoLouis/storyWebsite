import React from 'react';
import {Route, Navigate, Outlet} from 'react-router-dom';

const PublicRoute = () => {
    return <Navigate to={"/home"} />;
}

export default PublicRoute;