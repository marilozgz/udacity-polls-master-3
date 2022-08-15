import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";


export const RequireAuth = () => {
    const  isLoggedIn =  useSelector((state) => state.authedUser.authedUser);
    console.log(isLoggedIn);
  

  return (isLoggedIn ? 
    <Outlet/> : <Navigate to='/'/>
  )
};