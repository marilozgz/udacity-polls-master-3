import React from "react";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from "../components/Navbar/Navbar";
import Polls from "../components/Polls/Polls";
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
       <Polls />
    </div>
  );
};

export default Dashboard;
