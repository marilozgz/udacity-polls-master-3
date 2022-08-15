import React from "react";
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";


export const RequireAuth = () => {
    const  isLoggedIn =  useSelector((state) => state.authedUser.authedUser);
    console.log(isLoggedIn);
    const location = useLocation();


  return (isLoggedIn ? 
    <Outlet/> : <Navigate to='/'  state={{ from: location.pathname }} replace/>
  )
};