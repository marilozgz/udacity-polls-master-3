import React from 'react';
import {Outlet, Navigate, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateRoute = ({
    isLoggedIn,
    ...props
}) => {
    const authedUser = useSelector(state => state.combined.authedUser)
    const location = useLocation();
    return authedUser ? (<Outlet/>) : (<Navigate to={"/"}
        replace
        state={location}/>)
}
export default PrivateRoute
