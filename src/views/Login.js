import React from "react";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from "../components/Navbar/Navbar";
import LoginSelect from "../components/Login/loginSelect";
import '../styles/dashboard.css';

const Dashboard = () => {
   const navigage = useNavigate();
   

   const user =  useSelector((state) => state.authedUser.authedUser);
  
    useEffect(() => {
      if(!user) {
        navigage('/')
      }
    }
    , [])

  return (
    <div className="header">
      <Navbar />
       <LoginSelect />
    </div>
  );
};

export default Dashboard;
