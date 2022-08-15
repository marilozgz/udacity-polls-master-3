import React from "react";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from "../components/Navbar/Navbar";
import LoginSelect from "../components/Login/loginSelect";

const Dashboard = () => {
   

   
  return (
    <div className="header">
       <LoginSelect />
    </div>
  );
};

export default Dashboard;
